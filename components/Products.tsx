const categories = [
  {
    icon: "🔩",
    name: "Lathe Machines",
    desc: "High-precision turning centres and conventional lathes for shafts, bushings, and custom components.",
    tags: ["CNC Lathe", "All Geared", "Capstan"],
    origin: "India / Taiwan",
  },
  {
    icon: "🪛",
    name: "Drilling Machines",
    desc: "Radial arm and pillar drilling machines built for speed and accuracy across mild steel and cast iron.",
    tags: ["Radial", "Pillar", "Bench"],
    origin: "India / Japan",
  },
  {
    icon: "⚡",
    name: "Milling Machines",
    desc: "Universal and vertical milling centres for flat, angular, and complex surface machining operations.",
    tags: ["Vertical", "Horizontal", "CNC"],
    origin: "India / Taiwan",
  },
  {
    icon: "🔨",
    name: "Power Press",
    desc: "Mechanical and hydraulic power presses for stamping, blanking, and deep-drawing sheet metal work.",
    tags: ["C-Type", "H-Type", "Hydraulic"],
    origin: "India",
  },
  {
    icon: "🔪",
    name: "Bandsaw Machines",
    desc: "Industrial metal cutting bandsaws delivering clean, precise cuts on round and structural sections.",
    tags: ["Automatic", "Semi-Auto", "Carbide Band"],
    origin: "India / Italy",
  },
  {
    icon: "✨",
    name: "Laser Machines",
    desc: "Fiber laser cutting and marking systems for sheet metal, tubes, and structural profiles — high speed, zero tooling cost.",
    tags: ["Fiber Laser", "CO₂ Laser", "Marking"],
    origin: "USA / Italy / China",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
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
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Engineered for the
            <br />
            <span className="gradient-text">Modern Production Line</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#a3a3a3" }}>
            Explore our comprehensive catalog of high-performance machinery, from heavy-duty
            metal forming to micron-level machining. Every machine is built to run
            relentlessly — designed for maximum uptime and backed by our lifetime parts guarantee.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="card-hover group flex flex-col gap-5 p-8 rounded-2xl border cursor-pointer"
              style={{
                background: "var(--bg-primary)",
                borderColor: "rgba(234,179,8,0.1)",
              }}
            >
              {/* Icon + origin */}
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-200 group-hover:scale-110"
                  style={{ background: "var(--gold-dim)" }}
                >
                  {cat.icon}
                </div>
                <span
                  className="text-xs font-medium px-2 py-1 rounded-md"
                  style={{ background: "var(--bg-secondary)", color: "#525252" }}
                >
                  {cat.origin}
                </span>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">{cat.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                  {cat.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-medium"
                    style={{ background: "rgba(234,179,8,0.08)", color: "#ca8a04" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="text-sm font-bold flex items-center gap-1 transition-colors duration-200 group-hover:gap-2"
                style={{ color: "var(--gold)" }}
              >
                Enquire now <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
