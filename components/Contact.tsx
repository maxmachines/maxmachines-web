const offices = [
  {
    label: "CH",
    city: "Chennai HQ",
    role: "Head Office & Technical Support",
    phone: "+91 99620 61514",
    href: "tel:+919962061514",
    detail: "Tamil Nadu, India",
    dimmed: false,
  },
  {
    label: "SA",
    city: "Sales",
    role: "National Sales",
    phone: "+91 93828 61514",
    href: "tel:+919382861514",
    detail: "Pan-India",
    dimmed: false,
  },
  {
    label: "AH",
    city: "Ahmedabad",
    role: "Production & Procurement",
    phone: "+91 93838 61514",
    href: "tel:+919383861514",
    detail: "Gujarat, India",
    dimmed: false,
  },
  {
    label: "AL",
    city: "Accounts",
    role: "Accounts & Logistics",
    phone: "+91 99621 61514",
    href: "tel:+919962161514",
    detail: "Pan-India",
    dimmed: false,
  },
  {
    label: "24",
    city: "24/7 Support",
    role: "Automated Support",
    phone: "+91 91760 61514",
    href: "tel:+919176061514",
    detail: "Coming Soon",
    dimmed: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
            style={{
              color: "var(--gold)",
              borderColor: "var(--gold-border)",
              background: "var(--gold-dim)",
            }}
          >
            Contact Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Let&apos;s Talk
            <br />
            <span className="gradient-text">Machinery</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#a3a3a3" }}>
            Get in touch for technical consultation, pricing, or logistical support.
            Our specialized teams across India are ready to keep your production moving.
          </p>
        </div>

        {/* Office cards — 2 cols on md, 3 on lg, last row centred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offices.map((o) => (
            <div
              key={o.city}
              className="card-hover p-8 rounded-2xl border text-center flex flex-col items-center gap-4 relative"
              style={{
                background: "var(--bg-secondary)",
                borderColor: o.dimmed
                  ? "rgba(234,179,8,0.05)"
                  : "rgba(234,179,8,0.12)",
                opacity: o.dimmed ? 0.5 : 1,
              }}
            >
              {o.dimmed && (
                <span
                  className="absolute top-4 right-4 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide"
                  style={{ background: "rgba(234,179,8,0.15)", color: "var(--gold)" }}
                >
                  Coming Soon
                </span>
              )}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
                style={{
                  background: o.dimmed ? "rgba(234,179,8,0.3)" : "var(--gold)",
                  color: "#0f0f0f",
                }}
              >
                {o.label}
              </div>
              <div>
                <p className="text-white font-bold text-lg">{o.city}</p>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#525252" }}>
                  {o.role}
                </p>
                <a
                  href={o.href}
                  className="text-xl font-bold block transition-colors duration-200 hover:text-yellow-300"
                  style={{ color: "var(--gold)", pointerEvents: o.dimmed ? "none" : "auto" }}
                >
                  {o.phone}
                </a>
                <p className="text-sm mt-1" style={{ color: "#737373" }}>{o.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(234,179,8,0.07) 0%, var(--bg-secondary) 100%)",
            borderColor: "rgba(234,179,8,0.2)",
          }}
        >
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">
              Ready to source your next machine?
            </h3>
            <p style={{ color: "#737373" }}>
              Call us or drop a WhatsApp message — we respond within the hour.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="tel:+919962061514"
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 hover:scale-105"
              style={{ background: "var(--gold)", color: "#0f0f0f" }}
            >
              📞 Call Chennai
            </a>
            <a
              href="https://wa.me/919382861514"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm border text-center transition-all duration-200 hover:bg-white/5"
              style={{ color: "#22c55e", borderColor: "#22c55e" }}
            >
              💬 WhatsApp Us
            </a>
            <a
              href="https://forms.gle/TXjAGS67M1Nnb2Ye9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm border text-white text-center transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              📋 Fill Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
