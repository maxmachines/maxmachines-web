import Navbar from "@/components/Navbar";
import SocialStrip from "@/components/SocialStrip";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactEnquiryCTA from "@/components/ContactEnquiryCTA";

/* ─── SVG Background ─────────────────────────────────────────── */
const TechnicalDrawingBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 720"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    stroke="#eab308"
    strokeWidth="1.5"
    style={{ opacity: 0.08 }}
    aria-hidden="true"
  >
    {/* Large gear — bottom right */}
    <circle cx="1340" cy="700" r="190" />
    <circle cx="1340" cy="700" r="140" />
    <circle cx="1340" cy="700" r="34" />
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <line key={`lg-${i}`} x1="1340" y1="666" x2="1340" y2="560" transform={`rotate(${a} 1340 700)`} />
    ))}
    {Array.from({ length: 24 }).map((_, i) => (
      <rect key={`lt-${i}`} x="1334" y="498" width="12" height="26" rx="2" transform={`rotate(${i * 15} 1340 700)`} />
    ))}
    {/* Small gear — top left */}
    <circle cx="140" cy="100" r="100" />
    <circle cx="140" cy="100" r="72" />
    <circle cx="140" cy="100" r="18" />
    {[0, 72, 144, 216, 288].map((a, i) => (
      <line key={`sg-${i}`} x1="140" y1="82" x2="140" y2="28" transform={`rotate(${a} 140 100)`} />
    ))}
    {Array.from({ length: 16 }).map((_, i) => (
      <rect key={`st-${i}`} x="135" y="-4" width="10" height="18" rx="2" transform={`rotate(${i * 22.5} 140 100)`} />
    ))}
    {/* Crosshair centre */}
    <circle cx="620" cy="380" r="52" />
    <circle cx="620" cy="380" r="26" />
    <circle cx="620" cy="380" r="5" />
    <line x1="568" y1="380" x2="534" y2="380" />
    <line x1="672" y1="380" x2="706" y2="380" />
    <line x1="620" y1="328" x2="620" y2="294" />
    <line x1="620" y1="432" x2="620" y2="466" />
    {/* Upper-right crosshair */}
    <circle cx="960" cy="180" r="36" />
    <circle cx="960" cy="180" r="16" />
    <line x1="924" y1="180" x2="900" y2="180" />
    <line x1="996" y1="180" x2="1020" y2="180" />
    <line x1="960" y1="144" x2="960" y2="120" />
    <line x1="960" y1="216" x2="960" y2="240" />
    {/* Measurement lines */}
    <line x1="320" y1="50" x2="740" y2="50" strokeDasharray="6 5" />
    <line x1="320" y1="40" x2="320" y2="60" />
    <line x1="740" y1="40" x2="740" y2="60" />
    <polygon points="320,50 334,45 334,55" fill="#eab308" stroke="none" />
    <polygon points="740,50 726,45 726,55" fill="#eab308" stroke="none" />
    <line x1="480" y1="660" x2="880" y2="660" strokeDasharray="6 5" />
    <line x1="480" y1="650" x2="480" y2="670" />
    <line x1="880" y1="650" x2="880" y2="670" />
    <polygon points="480,660 494,655 494,665" fill="#eab308" stroke="none" />
    <polygon points="880,660 866,655 866,665" fill="#eab308" stroke="none" />
    <line x1="440" y1="120" x2="440" y2="520" strokeDasharray="6 5" />
    <line x1="430" y1="120" x2="450" y2="120" />
    <line x1="430" y1="520" x2="450" y2="520" />
    <circle cx="320" cy="50" r="3" fill="#eab308" stroke="none" />
    <circle cx="740" cy="50" r="3" fill="#eab308" stroke="none" />
    <circle cx="480" cy="660" r="3" fill="#eab308" stroke="none" />
    <circle cx="880" cy="660" r="3" fill="#eab308" stroke="none" />
  </svg>
);

/* ─── Icons ──────────────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.5 2 2 0 0 1 3.91 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────── */
const contactCards = [
  {
    initials: "CH",
    department: "Chennai HQ & Technical Support",
    email: "max@maxmachines.in",
    emailHref: "mailto:max@maxmachines.in",
    phone: "+91 99620 61514",
    phoneHref: "tel:+919962061514",
    hours: "Mon–Sat, 10am–7pm",
    dimmed: false,
  },
  {
    initials: "NS",
    department: "National Sales",
    email: "info@maxmachines.in",
    emailHref: "mailto:info@maxmachines.in",
    phone: "+91 93828 61514",
    phoneHref: "tel:+919382861514",
    hours: "Mon–Sat, 10am–7pm",
    dimmed: false,
  },
  {
    initials: "AL",
    department: "Accounts & Logistics",
    email: "accounts@maxmachines.in",
    emailHref: "mailto:accounts@maxmachines.in",
    phone: "+91 99621 61514",
    phoneHref: "tel:+919962161514",
    hours: "Mon–Sat, 10am–7pm",
    dimmed: false,
  },
  {
    initials: "24",
    department: "24/7 Automated Support",
    email: null,
    emailHref: null,
    phone: "+91 91760 61514",
    phoneHref: "tel:+919176061514",
    hours: "Coming Soon",
    dimmed: true,
  },
  {
    initials: "AH",
    department: "Ahmedabad Production & Procurement",
    email: "sales@maxmachines.in",
    emailHref: "mailto:sales@maxmachines.in",
    phone: "+91 93838 61514",
    phoneHref: "tel:+919383861514",
    hours: "Mon–Sat, 10am–7pm",
    dimmed: false,
  },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "48vh", paddingTop: "80px" }}
      >
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 55% 40%, #181408 0%, #0f0e08 40%, #0f0f0f 100%)",
          }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,179,8,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Coarse grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,179,8,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.1) 1px, transparent 1px)",
            backgroundSize: "200px 200px",
          }}
        />
        <TechnicalDrawingBackground />
        {/* Glow blobs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(234,179,8,0.08) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 80%, rgba(234,179,8,0.05) 0%, transparent 60%)" }}
        />

        {/* Content — tighter bottom padding to flow into cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10 text-center">
          <div className="animate-fade-in-up mb-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border"
              style={{ color: "var(--gold)", borderColor: "var(--gold-border)", background: "var(--gold-dim)" }}
            >
              Contact Us
            </span>
          </div>
          <h1 className="animate-fade-in-up-delay-1 font-black leading-tight tracking-tight mb-5">
            <span className="block text-white" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Let&apos;s Talk
            </span>
            <span className="block gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Machinery &amp; Solutions
            </span>
          </h1>
          <p
            className="animate-fade-in-up-delay-2 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#a3a3a3" }}
          >
            Get in touch for technical consultation, pricing, or logistical support. Our specialized
            teams across India are ready to keep your production moving.
          </p>
        </div>
      </section>

      <SocialStrip />

      {/* ── CONTACT CARDS ────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section label */}
          <div className="text-center mb-10">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border"
              style={{ color: "var(--gold)", borderColor: "var(--gold-border)", background: "var(--gold-dim)" }}
            >
              Our Offices
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Reach the Right Team
            </h2>
          </div>

          {/* Cards grid — 5 cards: 3+2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.department}
                className="card-hover relative rounded-2xl border p-8 flex flex-col gap-5"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: card.dimmed ? "rgba(234,179,8,0.06)" : "rgba(234,179,8,0.14)",
                  opacity: card.dimmed ? 0.6 : 1,
                }}
              >
                {card.dimmed && (
                  <span
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide"
                    style={{ background: "rgba(234,179,8,0.15)", color: "var(--gold)" }}
                  >
                    Coming Soon
                  </span>
                )}

                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{
                    background: card.dimmed ? "rgba(234,179,8,0.25)" : "var(--gold)",
                    color: "#0f0f0f",
                  }}
                >
                  {card.initials}
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-4">
                    {card.department}
                  </h3>

                  {card.email && (
                    <a
                      href={card.emailHref!}
                      className="flex items-center gap-2.5 text-sm mb-3 group transition-colors duration-200"
                      style={{ color: "#a3a3a3" }}
                    >
                      <span
                        className="flex-shrink-0 transition-colors duration-200 group-hover:text-yellow-400"
                        style={{ color: "var(--gold)" }}
                      >
                        <MailIcon />
                      </span>
                      <span className="group-hover:text-white transition-colors duration-200 break-all">
                        {card.email}
                      </span>
                    </a>
                  )}

                  <a
                    href={card.dimmed ? undefined : card.phoneHref}
                    className="flex items-center gap-2.5 text-sm mb-3 group transition-colors duration-200"
                    style={{
                      color: card.dimmed ? "#525252" : "var(--gold)",
                      pointerEvents: card.dimmed ? "none" : "auto",
                    }}
                  >
                    <span className="flex-shrink-0">
                      <PhoneIcon />
                    </span>
                    <span className="font-semibold text-base group-hover:text-yellow-300 transition-colors duration-200">
                      {card.phone}
                    </span>
                  </a>

                  <div className="flex items-center gap-2.5 text-sm" style={{ color: "#525252" }}>
                    <span className="flex-shrink-0">
                      <ClockIcon />
                    </span>
                    <span>{card.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY CTA SECTION ──────────────────────────────── */}
      <ContactEnquiryCTA />

      {/* ── CHENNAI MAP SECTION ──────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border"
              style={{ color: "var(--gold)", borderColor: "var(--gold-border)", background: "var(--gold-dim)" }}
            >
              Chennai HQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Visit Our Chennai HQ
            </h2>

            {/* Address row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
              <div className="flex items-start gap-2.5 text-sm text-left" style={{ color: "#a3a3a3" }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }}>
                  <MapPinIcon />
                </span>
                <div>
                  <p className="text-white font-medium mb-0.5">Max Machine Tools</p>
                  <p>No 84, Armenian Street, Parrys,</p>
                  <p>Chennai – 600001, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 self-center" style={{ background: "rgba(234,179,8,0.2)" }} />

              <div className="text-sm text-left" style={{ color: "#a3a3a3" }}>
                <p className="text-white font-medium mb-0.5">GST Number</p>
                <p className="font-mono tracking-wider" style={{ color: "var(--gold)" }}>
                  33AAWFM0648L1ZS
                </p>
              </div>

              <div className="hidden sm:block w-px h-12 self-center" style={{ background: "rgba(234,179,8,0.2)" }} />

              <div className="flex items-center gap-2 text-sm" style={{ color: "#a3a3a3" }}>
                <span style={{ color: "var(--gold)" }}><ClockIcon /></span>
                <span>Mon–Sat, 10am–7pm</span>
              </div>
            </div>
          </div>

          {/* Map iframe */}
          <div
            className="w-full overflow-hidden border"
            style={{
              height: "400px",
              borderRadius: "16px",
              borderColor: "rgba(234,179,8,0.2)",
              boxShadow: "0 0 60px rgba(234,179,8,0.06)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.080785436877!2d80.28598827532174!3d13.094067487232704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f4fdc0ff185%3A0xc59fc0a013f16e28!2sMax%20Machine%20Tools!5e0!3m2!1sen!2sin!4v1776858461665!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "16px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Max Machine Tools — Chennai HQ"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/wzKdbonC154pbnQK8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-yellow-300"
              style={{ color: "var(--gold)" }}
            >
              <MapPinIcon />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ── AHMEDABAD SECTION ────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border"
              style={{ color: "var(--gold)", borderColor: "var(--gold-border)", background: "var(--gold-dim)" }}
            >
              Ahmedabad Hub
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Ahmedabad Production &amp; Procurement Hub
            </h2>
          </div>

          {/* Info card */}
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl border p-8 lg:p-10"
              style={{
                background: "linear-gradient(135deg, rgba(234,179,8,0.06) 0%, rgba(15,15,15,0.8) 100%)",
                borderColor: "rgba(234,179,8,0.18)",
                boxShadow: "0 0 60px rgba(234,179,8,0.05)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm mb-6"
                style={{ background: "var(--gold)", color: "#0f0f0f" }}
              >
                AH
              </div>

              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex items-start gap-3" style={{ color: "#a3a3a3" }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }}>
                    <MapPinIcon />
                  </span>
                  <div className="text-sm leading-relaxed">
                    <p className="text-white font-medium mb-0.5">Office Address</p>
                    <p>3rd Floor, Chinubhai House, 7B,</p>
                    <p>Amrutbaug Colony, Navrangpura,</p>
                    <p>Ahmedabad – 380014, Gujarat, India</p>
                  </div>
                </div>

                <div
                  className="w-full h-px"
                  style={{ background: "rgba(234,179,8,0.1)" }}
                />

                {/* Phone */}
                <a
                  href="tel:+919383861514"
                  className="flex items-center gap-3 group transition-colors duration-200"
                  style={{ color: "var(--gold)" }}
                >
                  <span className="flex-shrink-0">
                    <PhoneIcon />
                  </span>
                  <span className="font-semibold text-base group-hover:text-yellow-300 transition-colors duration-200">
                    +91 93838 61514
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:sales@maxmachines.in"
                  className="flex items-center gap-3 group transition-colors duration-200"
                  style={{ color: "#a3a3a3" }}
                >
                  <span className="flex-shrink-0" style={{ color: "var(--gold)" }}>
                    <MailIcon />
                  </span>
                  <span className="text-sm group-hover:text-white transition-colors duration-200">
                    sales@maxmachines.in
                  </span>
                </a>

                {/* Hours */}
                <div className="flex items-center gap-3 text-sm" style={{ color: "#525252" }}>
                  <span className="flex-shrink-0">
                    <ClockIcon />
                  </span>
                  <span>Mon–Sat, 10am–7pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
