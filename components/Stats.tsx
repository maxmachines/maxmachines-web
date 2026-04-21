const stats = [
  { value: "5,000+", label: "Active Customers" },
  { value: "Lifetime", label: "Parts Supply Guaranteed" },
  { value: "2 Mega Hubs", label: "Chennai & Ahmedabad" },
  { value: "4+ Countries", label: "Elite Tech Sourced" },
];

export default function Stats() {
  return (
    <section
      className="py-0 border-y"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "rgba(234,179,8,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
          style={{ borderColor: "rgba(234,179,8,0.1)" }}>
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-8 text-center">
              <p
                className="text-3xl lg:text-4xl font-black mb-2 leading-none"
                style={{ color: "var(--gold)" }}
              >
                {s.value}
              </p>
              <p className="text-sm font-medium tracking-wide uppercase" style={{ color: "#737373" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
