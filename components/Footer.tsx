export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "rgba(234,179,8,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-xs tracking-wide"
            style={{ background: "var(--gold)", color: "#0f0f0f" }}
          >
            MMT
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">MAX MACHINE TOOLS</p>
            <p className="text-xs" style={{ color: "#525252" }}>
              Group Est. 1963 · MMT Est. 2012 · Chennai · Ahmedabad
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex gap-6 flex-wrap justify-center">
          {["Home", "About", "Products", "Blog", "Our Clients", "Contact Us"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm transition-colors hover:text-yellow-400"
              style={{ color: "#525252" }}
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="text-sm" style={{ color: "#404040" }}>
          © {year} Max Machine Tools.
        </p>
      </div>
    </footer>
  );
}
