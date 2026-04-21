const cards = [
  {
    title: "Global Tech, Indian Might",
    subtitle: "Precision Built & Globally Sourced",
    desc: "We manufacture heavy-duty machinery to rigorous standards in India, while seamlessly integrating elite, specialized technologies imported directly from the USA, Italy, Japan, and Taiwan.",
    icon: "🌐",
  },
  {
    title: "The Ultimate Safety Net",
    subtitle: "Lifetime Spares Guarantee",
    desc: "Your production line is safe with us. We offer an ironclad, life-long guarantee on spare parts availability — ensuring you get the part you need, even if your machine model is decades old or discontinued.",
    icon: "🛡️",
  },
  {
    title: "The Scale of Operations",
    subtitle: "5,000+ Global Installations",
    desc: "Dispatched daily from our Chennai head office and Ahmedabad production hub, our machines power factory floors across every major Indian city and international markets worldwide.",
    icon: "🏭",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: text */}
          <div className="flex-1 lg:sticky lg:top-24">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
              style={{
                color: "var(--gold)",
                borderColor: "var(--gold-border)",
                background: "var(--gold-dim)",
              }}
            >
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Trusted by Industry
              <br />
              <span className="gradient-text">for 63 Years</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#a3a3a3" }}>
              Since 1963, Max Machines has engineered the backbone of industrial
              manufacturing. What began as a relentless commitment to precision has evolved
              into a global powerhouse of machinery solutions. Operating from our mega-hubs
              in Chennai and Ahmedabad, we do more than supply equipment — we{" "}
              <span className="text-white">manufacture rugged, high-performance machinery in India</span>{" "}
              and curate elite, specialized technologies from Japan, Italy, Taiwan, and the USA.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#a3a3a3" }}>
              For over six decades, more than{" "}
              <span className="text-white font-semibold">5,000 manufacturers</span> have
              trusted us for one simple reason: we guarantee your production never stops.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Chennai HQ", "Ahmedabad Hub", "Pan-India", "Worldwide"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid rgba(234,179,8,0.15)",
                    color: "#737373",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 3 cards */}
          <div className="flex-1 flex flex-col gap-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="card-hover group p-8 rounded-2xl border"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "rgba(234,179,8,0.1)",
                }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-3xl flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gold-dim)" }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                      {c.subtitle}
                    </p>
                    <h3 className="text-white font-bold text-lg mb-3">{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
