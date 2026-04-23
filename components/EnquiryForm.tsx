"use client";

import { useState, useRef, useEffect } from "react";
import { client } from "@/sanity/lib/client";


const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfjMbvLVPL47lg1AW6OXjwGDZjdpmHKErSnoPB4__Qd97ZWmQ/formResponse";

const ENTRY = {
  fullName:    "entry.509075759",
  companyName: "entry.1447275458",
  phone:       "entry.1194291007",
  email:       "entry.11734439",
  machine:     "entry.1400567525",
  message:     "entry.628602322",
};

/* ── Types ───────────────────────────────────────────────────── */
type FormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  machine: string;
  message: string;
  website: string; // honeypot
};

type Errors = Partial<Record<keyof Omit<FormState, "website" | "companyName" | "message">, string>>;

/* ── Spinner ─────────────────────────────────────────────────── */
const Spinner = () => (
  <svg
    className="animate-spin w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12" cy="12" r="10"
      stroke="currentColor" strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

/* ── Validation ──────────────────────────────────────────────── */
function normalizePhone(raw: string): string {
  let p = raw.replace(/[\s\-+]/g, "");
  if (p.length === 12 && p.startsWith("91")) p = p.slice(2);
  if (p.length === 11 && p.startsWith("0")) p = p.slice(1);
  return p;
}

function validate(form: FormState): Errors {
  const errs: Errors = {};
  if (!form.fullName.trim()) errs.fullName = "Full name is required.";
  if (!form.phone.trim()) errs.phone = "Phone number is required.";
  if (!form.email.trim()) {
    errs.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errs.email = "Enter a valid email address.";
  }
  if (!form.machine) errs.machine = "Please select a machine interest.";
  return errs;
}

/* ── Component ───────────────────────────────────────────────── */
export default function EnquiryForm({ initialMachine = "" }: { initialMachine?: string }) {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    machine: initialMachine,
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [categories, setCategories] = useState<string[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    client
      .fetch<{ name: string }[]>(`*[_type == "category"] | order(displayOrder asc) { name }`)
      .then((data) => setCategories(data.map((c) => c.name)))
      .catch(() => setCategories([]))
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    if (initialMachine) {
      setForm((prev) => ({ ...prev, machine: initialMachine }));
    }
  }, [initialMachine]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check — silently succeed without submitting
    if (form.website) {
      setStatus("success");
      return;
    }

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("submitting");

    const normalizedPhone = normalizePhone(form.phone);

    const googleBody = new URLSearchParams({
      [ENTRY.fullName]:    form.fullName.trim(),
      [ENTRY.companyName]: form.companyName.trim(),
      [ENTRY.phone]:       normalizedPhone,
      [ENTRY.email]:       form.email.trim(),
      [ENTRY.machine]:     form.machine,
      [ENTRY.message]:     form.message.trim(),
    });

    const results = await Promise.allSettled([
      // Google Forms — fire-and-forget (no-cors always resolves)
      fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: googleBody.toString(),
      }),
      // Brevo email via our API route
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:            form.fullName.trim(),
          company:         form.companyName.trim(),
          phone:           normalizedPhone,
          email:           form.email.trim(),
          machineInterest: form.machine,
          message:         form.message.trim(),
        }),
      }).then((r) => { if (!r.ok) throw new Error("brevo failed"); }),
    ]);

    const anySuccess = results.some((r) => r.status === "fulfilled");
    setStatus(anySuccess ? "success" : "error");
  }

  /* ── Input style helpers ─────────────────────────────────────── */
  const baseInput =
    "w-full rounded-xl px-4 py-3 text-white text-sm bg-[#0f0f0f] border outline-none transition-all duration-200 placeholder:text-neutral-600 focus:ring-0";
  const inputBorder = (field: keyof Errors) =>
    errors[field]
      ? "border-yellow-400 focus:border-yellow-400"
      : "border-neutral-700 focus:border-yellow-500/70 hover:border-neutral-500";

  /* ── Success screen ─────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div
        className="rounded-2xl border px-8 py-14 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(234,179,8,0.07) 0%, #111 100%)",
          borderColor: "rgba(234,179,8,0.25)",
          boxShadow: "0 0 60px rgba(234,179,8,0.08)",
        }}
      >
        {/* Gold checkmark */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "rgba(234,179,8,0.15)", border: "2px solid rgba(234,179,8,0.4)" }}
          >
            <svg
              viewBox="0 0 24 24" fill="none" stroke="#eab308"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="w-8 h-8"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-black text-white mb-3">Enquiry Received!</h3>
        <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "#a3a3a3" }}>
          Thank you! Your enquiry has been received. Our team will contact you within{" "}
          <span className="text-white font-semibold">4 business hours</span>.
        </p>
        <button
          onClick={() => {
            setForm({ fullName: "", companyName: "", phone: "", email: "", machine: "", message: "", website: "" });
            setErrors({});
            setStatus("idle");
          }}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:brightness-110 hover:scale-105"
          style={{ background: "var(--gold)", color: "#0f0f0f" }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border p-8 lg:p-10"
      style={{
        background: "linear-gradient(135deg, rgba(234,179,8,0.04) 0%, #111 100%)",
        borderColor: "rgba(234,179,8,0.18)",
        boxShadow: "0 0 60px rgba(234,179,8,0.06)",
      }}
    >
      {/* Honeypot — visually hidden, screen readers skip it */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Rajesh Kumar"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange}
            className={`${baseInput} ${inputBorder("fullName")}`}
          />
          {errors.fullName && (
            <p className="text-xs text-yellow-400 mt-0.5">{errors.fullName}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="companyName" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Company Name <span className="text-neutral-600 font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="ABC Industries Pvt. Ltd."
            autoComplete="organization"
            value={form.companyName}
            onChange={handleChange}
            className={`${baseInput} border-neutral-700 focus:border-yellow-500/70 hover:border-neutral-500`}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 9962061514 or international number"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={`${baseInput} ${inputBorder("phone")}`}
          />
          {errors.phone && (
            <p className="text-xs text-yellow-400 mt-0.5">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="rajesh@abcindustries.com"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={`${baseInput} ${inputBorder("email")}`}
          />
          {errors.email && (
            <p className="text-xs text-yellow-400 mt-0.5">{errors.email}</p>
          )}
        </div>

        {/* Machine Interest — full width */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="machine" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Machine Interest <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              id="machine"
              name="machine"
              value={form.machine}
              onChange={handleChange}
              disabled={loadingCategories}
              className={`${baseInput} ${inputBorder("machine")} appearance-none pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-wait`}
              style={{ color: form.machine ? "white" : "#525252" }}
            >
              <option value="" disabled>
                {loadingCategories ? "Loading categories…" : "Select a machine category…"}
              </option>
              {!loadingCategories && categories.map((opt) => (
                <option key={opt} value={opt} style={{ color: "white", background: "#1a1a1a" }}>
                  {opt}
                </option>
              ))}
              {!loadingCategories && (
                <option value="Other / Not Sure" style={{ color: "white", background: "#1a1a1a" }}>
                  Other / Not Sure
                </option>
              )}
            </select>
            {/* Chevron */}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gold)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
          {errors.machine && (
            <p className="text-xs text-yellow-400 mt-0.5">{errors.machine}</p>
          )}
        </div>

        {/* Message — full width */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Message <span className="text-neutral-600 font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your requirements, quantities, timeline…"
            value={form.message}
            onChange={handleChange}
            className={`${baseInput} border-neutral-700 focus:border-yellow-500/70 hover:border-neutral-500 resize-none`}
          />
        </div>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div
          className="mt-5 rounded-xl px-4 py-3 text-sm border"
          style={{
            background: "rgba(239,68,68,0.08)",
            borderColor: "rgba(239,68,68,0.3)",
            color: "#fca5a5",
          }}
        >
          Something went wrong. Please try again or{" "}
          <a href="tel:+919382861514" className="underline font-semibold">call us directly</a>.
        </div>
      )}

      {/* Submit */}
      <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-110 hover:scale-105 disabled:hover:scale-100 disabled:hover:brightness-100"
          style={{
            background: "var(--gold)",
            color: "#0f0f0f",
            boxShadow: "0 0 32px rgba(234,179,8,0.2)",
          }}
        >
          {status === "submitting" ? (
            <>
              <Spinner />
              Sending Enquiry…
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Enquiry
            </>
          )}
        </button>
        <p className="text-xs leading-relaxed max-w-xs" style={{ color: "#ffffff" }}>
          ⚡ Submit and receive catalogue on WhatsApp &amp; Email{" "}
          <span style={{ color: "#eab308" }}>instantly</span>. Our team calls within{" "}
          <span style={{ color: "#eab308" }}>4 business hours</span>.
        </p>
      </div>
    </form>
  );
}
