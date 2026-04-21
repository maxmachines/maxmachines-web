const MachineSilhouettes = () => (
  <svg
    viewBox="0 0 1200 220"
    className="absolute bottom-0 left-0 right-0 w-full"
    preserveAspectRatio="xMidYMax meet"
    style={{ opacity: 0.07 }}
    fill="#eab308"
    aria-hidden="true"
  >
    {/* LATHE MACHINE — left */}
    <g transform="translate(30, 20)">
      {/* Base/bed */}
      <rect x="0" y="150" width="220" height="18" rx="2" />
      {/* Headstock */}
      <rect x="0" y="90" width="60" height="60" rx="3" />
      {/* Spindle nose */}
      <rect x="55" y="110" width="25" height="20" rx="2" />
      {/* Chuck body */}
      <circle cx="90" cy="120" r="18" />
      <circle cx="90" cy="120" r="10" />
      {/* Chuck jaws */}
      <rect x="88" y="102" width="4" height="8" />
      <rect x="88" y="130" width="4" height="8" />
      <rect x="72" y="118" width="8" height="4" />
      <rect x="100" y="118" width="8" height="4" />
      {/* Carriage */}
      <rect x="100" y="120" width="70" height="30" rx="2" />
      {/* Tool post */}
      <rect x="130" y="105" width="20" height="20" rx="1" />
      <rect x="145" y="100" width="8" height="12" />
      {/* Tailstock */}
      <rect x="175" y="100" width="45" height="50" rx="3" />
      <rect x="195" y="90" width="15" height="15" rx="7" />
      {/* Ways */}
      <rect x="60" y="145" width="155" height="5" rx="1" />
      {/* Leadscrew */}
      <rect x="60" y="148" width="155" height="2" />
      {/* Legs */}
      <rect x="10" y="168" width="18" height="30" rx="2" />
      <rect x="180" y="168" width="18" height="30" rx="2" />
      {/* Control panel */}
      <rect x="2" y="70" width="30" height="25" rx="2" />
      <circle cx="10" cy="78" r="3" />
      <circle cx="22" cy="78" r="3" />
      <rect x="8" y="85" width="18" height="4" rx="1" />
    </g>

    {/* DRILLING / DRILL PRESS — centre-left */}
    <g transform="translate(310, 10)">
      {/* Column */}
      <rect x="55" y="30" width="22" height="185" rx="3" />
      {/* Base */}
      <rect x="10" y="200" width="112" height="15" rx="3" />
      {/* Worktable */}
      <rect x="15" y="150" width="100" height="12" rx="2" />
      <rect x="30" y="162" width="72" height="25" rx="2" />
      {/* Table support arm */}
      <rect x="60" y="145" width="12" height="42" rx="2" />
      {/* Head housing */}
      <rect x="25" y="45" width="82" height="60" rx="4" />
      {/* Motor on top */}
      <rect x="38" y="10" width="56" height="38" rx="4" />
      <rect x="50" y="5" width="32" height="12" rx="2" />
      {/* Spindle */}
      <rect x="60" y="105" width="12" height="45" rx="2" />
      {/* Chuck */}
      <rect x="55" y="145" width="22" height="16" rx="3" />
      <rect x="62" y="161" width="8" height="18" rx="1" />
      {/* Drill bit tip */}
      <polygon points="66,179 70,179 68,198" />
      {/* Feed handles */}
      <circle cx="28" cy="75" r="8" />
      <rect x="18" y="73" width="20" height="4" rx="2" />
      <circle cx="16" cy="75" r="5" />
      {/* Belt guard */}
      <rect x="42" y="42" width="48" height="8" rx="2" />
    </g>

    {/* MILLING MACHINE — centre */}
    <g transform="translate(530, 5)">
      {/* Base */}
      <rect x="0" y="190" width="180" height="20" rx="3" />
      {/* Column */}
      <rect x="10" y="60" width="55" height="135" rx="3" />
      {/* Knee */}
      <rect x="10" y="150" width="160" height="35" rx="3" />
      {/* Saddle */}
      <rect x="20" y="125" width="140" height="30" rx="2" />
      {/* Table */}
      <rect x="15" y="105" width="155" height="22" rx="2" />
      {/* T-slots on table */}
      <rect x="25" y="109" width="135" height="3" rx="1" />
      <rect x="25" y="116" width="135" height="3" rx="1" />
      <rect x="25" y="123" width="135" height="3" rx="1" />
      {/* Overarm */}
      <rect x="60" y="35" width="110" height="28" rx="3" />
      {/* Arbor support */}
      <rect x="148" y="60" width="22" height="50" rx="2" />
      {/* Spindle head */}
      <rect x="55" y="55" width="50" height="55" rx="4" />
      {/* Cutter */}
      <circle cx="80" cy="105" r="16" />
      <circle cx="80" cy="105" r="8" />
      {/* Cutter teeth */}
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <rect
          key={i}
          x="78"
          y="89"
          width="4"
          height="8"
          rx="1"
          transform={`rotate(${a} 80 105)`}
        />
      ))}
      {/* Handwheels */}
      <circle cx="5" cy="140" r="12" />
      <circle cx="5" cy="140" r="5" />
      <circle cx="175" cy="115" r="10" />
      <circle cx="175" cy="115" r="4" />
    </g>

    {/* POWER PRESS — centre-right */}
    <g transform="translate(760, 15)">
      {/* Frame uprights */}
      <rect x="0" y="30" width="25" height="175" rx="3" />
      <rect x="135" y="30" width="25" height="175" rx="3" />
      {/* Crown (top) */}
      <rect x="0" y="10" width="160" height="28" rx="4" />
      {/* Bed (bottom) */}
      <rect x="0" y="178" width="160" height="27" rx="3" />
      {/* Bolster plate */}
      <rect x="15" y="165" width="130" height="14" rx="2" />
      {/* Slide/ram */}
      <rect x="30" y="80" width="100" height="55" rx="3" />
      {/* Ram guides */}
      <rect x="22" y="75" width="12" height="65" rx="2" />
      <rect x="126" y="75" width="12" height="65" rx="2" />
      {/* Punch */}
      <rect x="68" y="135" width="24" height="30" rx="1" />
      <polygon points="68,165 92,165 80,182" />
      {/* Flywheel */}
      <circle cx="80" cy="45" r="22" />
      <circle cx="80" cy="45" r="8" />
      <rect x="78" y="23" width="4" height="44" />
      <rect x="58" y="43" width="44" height="4" />
      {/* Motor */}
      <rect x="108" y="20" width="30" height="22" rx="3" />
      {/* Control buttons */}
      <circle cx="15" cy="120" r="6" />
      <circle cx="15" cy="140" r="6" />
    </g>

    {/* BANDSAW — right */}
    <g transform="translate(980, 20)">
      {/* Frame */}
      <rect x="30" y="0" width="60" height="110" rx="4" />
      {/* Upper wheel housing */}
      <circle cx="60" cy="20" r="28" />
      <circle cx="60" cy="20" r="18" />
      <circle cx="60" cy="20" r="6" />
      {/* Lower wheel housing */}
      <circle cx="60" cy="90" r="28" />
      <circle cx="60" cy="90" r="18" />
      <circle cx="60" cy="90" r="6" />
      {/* Blade guides visible section */}
      <rect x="57" y="48" width="6" height="42" />
      {/* Blade guides brackets */}
      <rect x="25" y="52" width="35" height="8" rx="1" />
      <rect x="25" y="56" width="8" height="20" rx="1" />
      {/* Worktable */}
      <rect x="0" y="118" width="120" height="14" rx="2" />
      <rect x="10" y="132" width="100" height="28" rx="2" />
      {/* Column/base */}
      <rect x="35" y="155" width="50" height="40" rx="3" />
      <rect x="10" y="182" width="100" height="16" rx="3" />
      {/* Fence */}
      <rect x="78" y="118" width="4" height="14" />
      <rect x="78" y="110" width="30" height="8" rx="1" />
      {/* Vise */}
      <rect x="10" y="124" width="22" height="8" rx="1" />
      <rect x="0" y="126" width="12" height="5" rx="1" />
    </g>
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

      {/* Gear / circuit decoration SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.04 }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="#eab308"
        strokeWidth="1"
        aria-hidden="true"
      >
        {/* Large gear — top right */}
        <circle cx="1050" cy="140" r="110" />
        <circle cx="1050" cy="140" r="70" />
        <circle cx="1050" cy="140" r="20" />
        {[0,18,36,54,72,90,108,126,144,162,180,198,216,234,252,270,288,306,324,342].map((a, i) => (
          <rect
            key={i}
            x="1045"
            y="22"
            width="10"
            height="22"
            rx="2"
            transform={`rotate(${a} 1050 140)`}
          />
        ))}
        {/* Spokes */}
        {[0,60,120,180,240,300].map((a, i) => (
          <line
            key={i}
            x1="1050"
            y1="160"
            x2="1050"
            y2="90"
            transform={`rotate(${a} 1050 140)`}
          />
        ))}

        {/* Small gear — bottom left */}
        <circle cx="120" cy="680" r="60" />
        <circle cx="120" cy="680" r="38" />
        <circle cx="120" cy="680" r="12" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
          <rect
            key={i}
            x="116"
            y="614"
            width="8"
            height="15"
            rx="1"
            transform={`rotate(${a} 120 680)`}
          />
        ))}

        {/* Circuit lines — top left */}
        <polyline points="0,80 60,80 60,120 180,120 180,80 300,80" />
        <circle cx="60" cy="80" r="4" fill="#eab308" />
        <circle cx="180" cy="120" r="4" fill="#eab308" />
        <circle cx="60" cy="120" r="4" fill="#eab308" />
        <polyline points="0,200 40,200 40,160 140,160 140,220 240,220" />
        <circle cx="40" cy="200" r="4" fill="#eab308" />
        <circle cx="140" cy="160" r="4" fill="#eab308" />
        <circle cx="140" cy="220" r="4" fill="#eab308" />

        {/* Circuit lines — right side */}
        <polyline points="1200,300 1140,300 1140,350 1020,350 1020,280 900,280" />
        <circle cx="1140" cy="300" r="4" fill="#eab308" />
        <circle cx="1020" cy="350" r="4" fill="#eab308" />
        <circle cx="1020" cy="280" r="4" fill="#eab308" />

        {/* Cross-hairs / targeting */}
        <circle cx="350" cy="600" r="40" />
        <circle cx="350" cy="600" r="20" />
        <line x1="310" y1="600" x2="290" y2="600" />
        <line x1="390" y1="600" x2="410" y2="600" />
        <line x1="350" y1="560" x2="350" y2="540" />
        <line x1="350" y1="640" x2="350" y2="660" />

        {/* Diagonal measurement lines */}
        <line x1="500" y1="50" x2="700" y2="50" strokeDasharray="4 4" />
        <line x1="500" y1="44" x2="500" y2="56" />
        <line x1="700" y1="44" x2="700" y2="56" />
        <line x1="800" y1="700" x2="1000" y2="700" strokeDasharray="4 4" />
        <line x1="800" y1="694" x2="800" y2="706" />
        <line x1="1000" y1="694" x2="1000" y2="706" />
      </svg>

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

      {/* Machine silhouettes at bottom */}
      <MachineSilhouettes />

      {/* Dark fade at bottom so silhouettes blend */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(15,15,15,0.7) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 pb-48 text-center lg:text-left">
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
          <h1 className="animate-fade-in-up-delay-1 text-6xl lg:text-8xl font-black text-white leading-none tracking-tight mb-8">
            Legacy of
            <br />
            <span className="gradient-text">Precision</span>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#404040" }}>
          Scroll
        </span>
        <div className="w-px h-8 animate-pulse" style={{ background: "var(--gold)" }} />
      </div>
    </section>
  );
}
