"use client";

import { useEnquiryModal } from "@/context/EnquiryModalContext";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.5 2 2 0 0 1 3.91 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const FormIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default function ContactEnquiryCTA() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section className="py-16 lg:py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
          style={{ color: "var(--gold)", borderColor: "var(--gold-border)", background: "var(--gold-dim)" }}
        >
          Catalogue &amp; Enquiry
        </span>

        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
          Get Your Catalogue in 10 Seconds
        </h2>

        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "#a3a3a3" }}>
          Fill our quick form and receive your catalogue instantly on WhatsApp &amp; Email.
          Our team will call you within{" "}
          <span className="text-white font-medium">4 business hours</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+919382861514"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm border text-white transition-all duration-200 hover:bg-white/5 hover:scale-105"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <PhoneIcon />
            Call Sales
          </a>

          <a
            href="https://wa.me/919962061514"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm border transition-all duration-200 hover:scale-105"
            style={{
              color: "#25d366",
              borderColor: "#25d366",
              background: "rgba(37,211,102,0.06)",
            }}
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>

          <button
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:brightness-110 hover:scale-105"
            style={{ background: "var(--gold)", color: "#0f0f0f" }}
          >
            <FormIcon />
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
