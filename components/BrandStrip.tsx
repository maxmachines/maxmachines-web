"use client";

const brands = [
  "HABA", "PRG", "Morse", "Velse", "Bradma", "Modi",
  "Cmatic", "Sharp", "Zither", "Bonet", "Bonmac",
];

const Pills = () => (
  <>
    {brands.map((brand) => (
      <span
        key={brand}
        className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold tracking-wide flex-shrink-0"
        style={{
          border: "1px solid rgba(234,179,8,0.5)",
          color: "#eab308",
          background: "rgba(234,179,8,0.06)",
          whiteSpace: "nowrap",
        }}
      >
        {brand}
      </span>
    ))}
  </>
);

export default function BrandStrip() {
  return (
    <section style={{ background: "#1a1a1a", borderTop: "1px solid rgba(234,179,8,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-4 text-center">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border"
          style={{ color: "#eab308", borderColor: "rgba(234,179,8,0.35)", background: "rgba(234,179,8,0.08)" }}
        >
          Trusted Brands
        </span>
        <h2 className="text-xl lg:text-2xl font-black text-white mb-6">
          Trusted Brands We Stock &amp; Service
        </h2>
      </div>

      {/* Scrolling strip */}
      <div className="relative overflow-hidden pb-10" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <style>{`
          @keyframes brand-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .brand-scroll-track {
            display: flex;
            gap: 1.25rem;
            width: max-content;
            animation: brand-scroll 22s linear infinite;
          }
          .brand-scroll-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="brand-scroll-track">
          <Pills />
          {/* duplicate for seamless loop */}
          <Pills />
        </div>
      </div>
    </section>
  );
}
