import Image from "next/image";

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
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="MMT Logo"
            style={{ borderRadius: "6px" }}
          />
          <span style={{ color: "#ffffff", fontSize: "26px", fontWeight: 500 }}>
            max machine tools™
          </span>
        </div>

        {/* Links */}
        <nav className="flex gap-6 flex-wrap justify-center">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Products", href: "/products" },
            { label: "Blog", href: "/blog" },
            { label: "Our Clients", href: "/our-clients" },
            { label: "Contact Us", href: "/contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm transition-colors hover:text-yellow-400"
              style={{ color: "#525252" }}
            >
              {label}
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
