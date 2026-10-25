import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "Export & UAE | Max Machine Tools" },
  description:
    "Industrial machinery for UAE, Middle East, Africa and South Asia. Request a quote for export orders from our full catalog.",
  alternates: { canonical: "https://www.maxmachines.in/export-and-uae" },
  openGraph: {
    title: "Export & UAE | Max Machine Tools",
    description:
      "Industrial machinery for UAE, Middle East, Africa and South Asia. Request a quote for export orders from our full catalog.",
    url: "https://www.maxmachines.in/export-and-uae",
    siteName: "Max Machine Tools",
    images: [{ url: "https://www.maxmachines.in/logo.png", width: 1200, height: 1200, alt: "Max Machine Tools" }],
    locale: "en_IN",
    type: "website",
  },
};

const markets = [
  { name: "UAE", detail: "Dubai, Abu Dhabi and across the Emirates" },
  { name: "Middle East", detail: "Saudi Arabia, Qatar, Kuwait, Bahrain, Oman" },
  { name: "Africa", detail: "East Africa, West Africa, South Africa" },
  { name: "South Asia", detail: "Sri Lanka, Bangladesh, Nepal" },
  { name: "Other Export", detail: "Any country — enquire with destination" },
];

const steps = [
  { n: "01", heading: "Send an enquiry", body: "Tell us the machine, quantity, and your country. Use WhatsApp, email, or the enquiry form — whichever is easiest." },
  { n: "02", heading: "Receive a quotation", body: "We send you a quotation with machine price, packing charges, and estimated freight to your port. No hidden fees." },
  { n: "03", heading: "Confirm the order", body: "Once you accept the quote, we confirm availability and lead time. Payment terms are agreed at this stage." },
  { n: "04", heading: "Packing and dispatch", body: "Machines are packed in export-grade wooden crates. We prepare packing lists and coordinate with the freight forwarder." },
  { n: "05", heading: "Shipping documents", body: "We provide the documents you need: commercial invoice, packing list, and Certificate of Origin (COO)." },
];

const brands = [
  { name: "HABA", desc: "MMT's own brand — bandsaw machines made in India" },
  { name: "PRG", desc: "MMT's own brand — pillar drilling and press machines" },
  { name: "Kopis", desc: "In-house traded brand" },
  { name: "Airdas", desc: "In-house traded brand" },
  { name: "Velse", desc: "In-house traded brand" },
  { name: "Modi", desc: "In-house traded brand" },
];

const ChevronRight = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M7 4l6 6-6 6" />
  </svg>
);

export default function ExportAndUAEPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 55% 40%, #181408 0%, #0f0e08 40%, #0f0f0f 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,179,8,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>Home</Link>
            <ChevronRight />
            <span style={{ color: "var(--gold)" }}>Export & UAE</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
            Pan-India & Export
          </p>

          <h1 className="font-black leading-tight tracking-tight text-4xl lg:text-6xl mb-4">
            <span className="text-white">Industrial Machines for</span>{" "}
            <span style={{ color: "var(--gold)" }}>UAE & Export Markets</span>
          </h1>

          <p className="text-base lg:text-lg max-w-2xl mx-auto mb-8" style={{ color: "#a3a3a3" }}>
            We supply industrial machinery from India to the UAE, Middle East, Africa,
            South Asia, and beyond. Same catalog, same quality — packed for export.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnquireButton
              productName="Export Enquiry"
              message="Hi, I am enquiring about export / UAE supply of machines."
              includePageUrl
              label="📋 Send Export Enquiry"
              className="px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:brightness-110"
              style={{ background: "var(--gold)", color: "#0f0f0f" }}
            />
            <a
              href={waLink("919962061514", { type: "export" })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-bold text-sm border transition-all duration-200 hover:bg-white/5"
              style={{ color: "#22c55e", borderColor: "#22c55e" }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT WE SUPPLY ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-black text-white mb-3">
              What We <span style={{ color: "var(--gold)" }}>Supply</span>
            </h2>
            <p style={{ color: "#a3a3a3" }}>
              Our catalog covers the industrial machines most in demand across export markets.
              If you need something not listed, ask — we source widely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Bandsaw Machines", sub: "Vertical and horizontal, metal-cutting" },
              { name: "Lathe Machines", sub: "All-geared, heavy-duty belt lathe" },
              { name: "Drilling Machines", sub: "Pillar, radial, tapping" },
              { name: "Press Machines", sub: "Impact press, toggle press, power press" },
              { name: "Marking Solutions", sub: "Dot peen, steel types, hydro-pneumatic" },
              { name: "More on request", sub: "Ask us — we source widely" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl border p-5"
                style={{ background: "var(--bg-primary)", borderColor: "rgba(234,179,8,0.14)" }}
              >
                <p className="font-bold text-white text-sm mb-1">{item.name}</p>
                <p className="text-xs" style={{ color: "#737373" }}>{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-yellow-300"
              style={{ color: "var(--gold)" }}
            >
              Browse the full catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARKETS ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-black text-white mb-3">
              Markets We <span style={{ color: "var(--gold)" }}>Serve</span>
            </h2>
            <p style={{ color: "#a3a3a3" }}>
              We export regularly by air and sea as an IEC holder. If you are in any of
              these regions, we can quote you directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border p-5 flex gap-4 items-start"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.14)" }}
              >
                <span
                  className="mt-0.5 flex-shrink-0 rounded-full text-xs font-bold px-2 py-0.5"
                  style={{ background: "rgba(234,179,8,0.12)", color: "var(--gold)" }}
                >
                  ✈
                </span>
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">{m.name}</p>
                  <p className="text-xs" style={{ color: "#737373" }}>{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW EXPORT ORDERS WORK ────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-black text-white mb-3">
              How Export Orders <span style={{ color: "var(--gold)" }}>Work</span>
            </h2>
            <p style={{ color: "#a3a3a3" }}>
              Five straightforward steps from enquiry to delivery.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-xl border p-6 flex gap-5 items-start"
                style={{ background: "var(--bg-primary)", borderColor: "rgba(234,179,8,0.14)" }}
              >
                <span
                  className="text-2xl font-black flex-shrink-0"
                  style={{ color: "rgba(234,179,8,0.25)", lineHeight: 1 }}
                >
                  {s.n}
                </span>
                <div>
                  <p className="font-bold text-white mb-1">{s.heading}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-black text-white mb-3">
              Our <span style={{ color: "var(--gold)" }}>Brands</span>
            </h2>
            <p style={{ color: "#a3a3a3" }}>
              HABA and PRG are our own brands, designed and built in India.
              The other brands are traded under our group.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="rounded-xl border p-4 text-center"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.14)" }}
              >
                <p className="font-black text-lg mb-1" style={{ color: "var(--gold)" }}>{b.name}</p>
                <p className="text-xs leading-snug" style={{ color: "#737373" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY CTA ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border"
            style={{
              background: "linear-gradient(135deg, rgba(234,179,8,0.07) 0%, var(--bg-secondary) 100%)",
              borderColor: "rgba(234,179,8,0.2)",
            }}
          >
            <div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-2">
                Ready to place an export order?
              </h3>
              <p style={{ color: "#737373" }}>
                Send us your machine list and destination. We respond within the hour.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <EnquireButton
                productName="Export Enquiry"
                message="Hi, I am enquiring about export / UAE supply of machines."
                includePageUrl
                label="📋 Send Enquiry"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 hover:brightness-110"
                style={{ background: "var(--gold)", color: "#0f0f0f" }}
              />
              <a
                href="tel:+919962061514"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-center border transition-all duration-200 hover:bg-white/5"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}
              >
                📞 Call Chennai
              </a>
              <a
                href={waLink("919962061514", { type: "export" })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm border text-center transition-all duration-200 hover:bg-white/5"
                style={{ color: "#22c55e", borderColor: "#22c55e" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <SchemaMarkup data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.maxmachines.in" },
          { "@type": "ListItem", "position": 2, "name": "Export & UAE", "item": "https://www.maxmachines.in/export-and-uae" },
        ],
      }} />
    </main>
  );
}
