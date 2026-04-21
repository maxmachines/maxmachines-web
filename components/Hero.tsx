const TechnicalDrawingBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    stroke="#eab308"
    strokeWidth="1.5"
    style={{ opacity: 0.1 }}
    aria-hidden="true"
  >
    {/* ── LARGE GEAR — bottom right ── */}
    <circle cx="1300" cy="860" r="200" />
    <circle cx="1300" cy="860" r="148" />
    <circle cx="1300" cy="860" r="36" />
    {/* Spokes */}
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <line
        key={`lg-spoke-${i}`}
        x1="1300" y1="824" x2="1300" y2="714"
        transform={`rotate(${a} 1300 860)`}
      />
    ))}
    {/* Teeth */}
    {Array.from({ length: 24 }).map((_, i) => (
      <rect
        key={`lg-tooth-${i}`}
        x="1294" y="648"
        width="12" height="28"
        rx="2"
        transform={`rotate(${i * 15} 1300 860)`}
      />
    ))}

    {/* ── SMALL GEAR — top left ── */}
    <circle cx="160" cy="110" r="108" />
    <circle cx="160" cy="110" r="78" />
    <circle cx="160" cy="110" r="20" />
    {[0, 72, 144, 216, 288].map((a, i) => (
      <line
        key={`sg-spoke-${i}`}
        x1="160" y1="90" x2="160" y2="32"
        transform={`rotate(${a} 160 110)`}
      />
    ))}
    {Array.from({ length: 16 }).map((_, i) => (
      <rect
        key={`sg-tooth-${i}`}
        x="155" y="-4"
        width="10" height="20"
        rx="2"
        transform={`rotate(${i * 22.5} 160 110)`}
      />
    ))}

    {/* ── LATHE MACHINE — left side ── */}
    <g transform="translate(30, 340)">
      {/* Bed */}
      <rect x="0" y="200" width="340" height="22" rx="3" />
      {/* Headstock */}
      <rect x="0" y="120" width="80" height="82" rx="4" />
      {/* Spindle boss */}
      <rect x="75" y="148" width="30" height="26" rx="2" />
      {/* Chuck rings */}
      <circle cx="128" cy="161" r="28" />
      <circle cx="128" cy="161" r="16" />
      <circle cx="128" cy="161" r="6" />
      {/* Chuck jaws */}
      <rect x="126" y="133" width="4" height="10" />
      <rect x="126" y="179" width="4" height="10" />
      <rect x="100" y="159" width="10" height="4" />
      <rect x="146" y="159" width="10" height="4" />
      {/* Carriage */}
      <rect x="148" y="152" width="90" height="48" rx="3" />
      {/* Tool post */}
      <rect x="182" y="134" width="26" height="24" rx="2" />
      <rect x="200" y="126" width="10" height="14" />
      {/* Tailstock */}
      <rect x="255" y="132" width="62" height="68" rx="4" />
      <rect x="278" y="118" width="20" height="20" rx="10" />
      {/* Ways */}
      <rect x="82" y="195" width="235" height="6" rx="1" />
      {/* Leadscrew */}
      <rect x="82" y="198" width="235" height="3" strokeDasharray="8 4" />
      {/* Legs */}
      <rect x="14" y="222" width="22" height="38" rx="3" />
      <rect x="288" y="222" width="22" height="38" rx="3" />
      {/* Control panel */}
      <rect x="2" y="88" width="38" height="36" rx="3" />
      <circle cx="12" cy="100" r="4" />
      <circle cx="28" cy="100" r="4" />
      <rect x="8" y="112" width="24" height="5" rx="2" />
    </g>

    {/* ── DRILL PRESS — right side ── */}
    <g transform="translate(1090, 120)">
      {/* Column */}
      <rect x="62" y="20" width="26" height="560" rx="4" />
      {/* Base */}
      <rect x="0" y="560" width="150" height="20" rx="4" />
      {/* Table */}
      <rect x="8" y="420" width="134" height="16" rx="3" />
      <rect x="20" y="436" width="110" height="32" rx="3" />
      {/* Table arm */}
      <rect x="74" y="408" width="14" height="60" rx="2" />
      {/* Head housing */}
      <rect x="18" y="52" width="114" height="80" rx="6" />
      {/* Motor */}
      <rect x="30" y="10" width="90" height="46" rx="5" />
      <rect x="46" y="4" width="58" height="14" rx="2" />
      {/* Spindle */}
      <rect x="72" y="132" width="14" height="60" rx="2" />
      {/* Chuck */}
      <rect x="65" y="190" width="28" height="22" rx="4" />
      <rect x="74" y="212" width="10" height="24" rx="2" />
      {/* Drill tip */}
      <polygon points="74,236 84,236 79,264" />
      {/* Feed handles */}
      <circle cx="22" cy="100" r="12" />
      <rect x="10" y="98" width="24" height="4" rx="2" />
      <circle cx="8" cy="100" r="7" />
      {/* Belt guard */}
      <rect x="32" y="50" width="86" height="10" rx="2" />
    </g>

    {/* ── CROSSHAIR / TARGET — centre ── */}
    <circle cx="640" cy="460" r="55" />
    <circle cx="640" cy="460" r="28" />
    <circle cx="640" cy="460" r="6" />
    <line x1="585" y1="460" x2="550" y2="460" />
    <line x1="695" y1="460" x2="730" y2="460" />
    <line x1="640" y1="405" x2="640" y2="370" />
    <line x1="640" y1="515" x2="640" y2="550" />

    {/* Second crosshair — upper right area */}
    <circle cx="980" cy="220" r="38" />
    <circle cx="980" cy="220" r="18" />
    <line x1="942" y1="220" x2="916" y2="220" />
    <line x1="1018" y1="220" x2="1044" y2="220" />
    <line x1="980" y1="182" x2="980" y2="156" />
    <line x1="980" y1="258" x2="980" y2="284" />

    {/* ── HORIZONTAL MEASUREMENT LINES ── */}
    {/* Top span */}
    <line x1="340" y1="60" x2="780" y2="60" strokeDasharray="6 5" />
    <line x1="340" y1="50" x2="340" y2="70" />
    <line x1="780" y1="50" x2="780" y2="70" />
    {/* Arrow heads */}
    <polygon points="340,60 354,55 354,65" fill="#eab308" stroke="none" />
    <polygon points="780,60 766,55 766,65" fill="#eab308" stroke="none" />

    {/* Mid span */}
    <line x1="500" y1="800" x2="900" y2="800" strokeDasharray="6 5" />
    <line x1="500" y1="790" x2="500" y2="810" />
    <line x1="900" y1="790" x2="900" y2="810" />
    <polygon points="500,800 514,795 514,805" fill="#eab308" stroke="none" />
    <polygon points="900,800 886,795 886,805" fill="#eab308" stroke="none" />

    {/* ── VERTICAL MEASUREMENT LINES ── */}
    <line x1="460" y1="140" x2="460" y2="580" strokeDasharray="6 5" />
    <line x1="450" y1="140" x2="470" y2="140" />
    <line x1="450" y1="580" x2="470" y2="580" />
    <polygon points="460,140 455,154 465,154" fill="#eab308" stroke="none" />
    <polygon points="460,580 455,566 465,566" fill="#eab308" stroke="none" />

    {/* Right vertical */}
    <line x1="1050" y1="300" x2="1050" y2="700" strokeDasharray="6 5" />
    <line x1="1040" y1="300" x2="1060" y2="300" />
    <line x1="1040" y1="700" x2="1060" y2="700" />

    {/* ── ENGINEERING ANNOTATIONS — scattered dots ── */}
    <circle cx="340" cy="60" r="3" fill="#eab308" stroke="none" />
    <circle cx="780" cy="60" r="3" fill="#eab308" stroke="none" />
    <circle cx="500" cy="800" r="3" fill="#eab308" stroke="none" />
    <circle cx="900" cy="800" r="3" fill="#eab308" stroke="none" />
    <circle cx="460" cy="140" r="3" fill="#eab308" stroke="none" />
    <circle cx="460" cy="580" r="3" fill="#eab308" stroke="none" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 55% 35%, #181408 0%, #0f0e08 40%, #0f0f0f 100%)",
        }}
      />

      {/* Primary grid — fine */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,179,8,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Secondary grid — coarse accent */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,179,8,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.1) 1px, transparent 1px)",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Technical drawing background */}
      <TechnicalDrawingBackground />

      {/* Gold glow blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(234,179,8,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(234,179,8,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center lg:text-left">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 flex justify-center lg:justify-start">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border"
              style={{
                color: "var(--gold)",
                borderColor: "var(--gold-border)",
                background: "var(--gold-dim)",
              }}
            >
              Group Est. 1963 &nbsp;·&nbsp; MMT Est. 2012
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up-delay-1 font-black leading-none tracking-tight mb-8">
            <span className="block whitespace-nowrap text-white" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>Legacy of Precision</span>
            <span className="block whitespace-nowrap" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "#eab308" }}>Max Machine Tools</span>
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-in-up-delay-2 text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl"
            style={{ color: "#a3a3a3" }}
          >
            Engineering excellence since 1963. We manufacture premium industrial machinery
            in India driven by global technological innovations, complemented by a curated
            range of elite imports from{" "}
            <span className="text-white font-medium">USA, Italy, Japan and Taiwan</span>.
            Operating from our Chennai and Ahmedabad hubs, we supply Pan-India and worldwide
            industries and back every machine with an unmatched{" "}
            <span className="text-white font-medium">
              life-long guarantee on supply of spare parts
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#products"
              className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--gold)",
                color: "#0f0f0f",
                boxShadow: "0 0 40px rgba(234,179,8,0.2)",
              }}
            >
              Explore Machines
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-bold text-base border text-white transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
