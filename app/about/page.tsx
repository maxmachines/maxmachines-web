"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStrip from "@/components/SocialStrip";
import { client } from "@/sanity/lib/client";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  imageUrl?: string;
}

const GearIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8" aria-hidden="true">
    <circle cx="32" cy="32" r="28" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="20" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="8" stroke="#eab308" strokeWidth="2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <rect key={i} x="29" y="2" width="6" height="10" rx="1" fill="#eab308" opacity="0.5" transform={`rotate(${a} 32 32)`} />
    ))}
  </svg>
);

const GearBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 500"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    stroke="#eab308"
    strokeWidth="1.5"
    style={{ opacity: 0.07 }}
    aria-hidden="true"
  >
    <circle cx="1340" cy="520" r="200" /><circle cx="1340" cy="520" r="150" /><circle cx="1340" cy="520" r="36" />
    {[0,45,90,135,180,225,270,315].map((a,i)=><line key={i} x1="1340" y1="484" x2="1340" y2="370" transform={`rotate(${a} 1340 520)`}/>)}
    {Array.from({length:24}).map((_,i)=><rect key={i} x="1334" y="308" width="12" height="26" rx="2" transform={`rotate(${i*15} 1340 520)`}/>)}
    <circle cx="80" cy="60" r="120" /><circle cx="80" cy="60" r="88" /><circle cx="80" cy="60" r="22" />
    {[0,60,120,180,240,300].map((a,i)=><line key={i} x1="80" y1="38" x2="80" y2="-24" transform={`rotate(${a} 80 60)`}/>)}
    {Array.from({length:18}).map((_,i)=><rect key={i} x="75" y="-44" width="10" height="20" rx="2" transform={`rotate(${i*20} 80 60)`}/>)}
    <circle cx="720" cy="250" r="48" /><circle cx="720" cy="250" r="24" /><circle cx="720" cy="250" r="5" />
    <line x1="672" y1="250" x2="640" y2="250" /><line x1="768" y1="250" x2="800" y2="250" />
    <line x1="720" y1="202" x2="720" y2="170" /><line x1="720" y1="298" x2="720" y2="330" />
  </svg>
);

// Country flag emojis
const countryFlags: Record<string, string> = {
  "Dubai": "🇦🇪", "Kuwait": "🇰🇼", "Nepal": "🇳🇵", "Philippines": "🇵🇭",
  "UAE": "🇦🇪", "Sri Lanka": "🇱🇰", "Malaysia": "🇲🇾", "Canada": "🇨🇦",
  "USA": "🇺🇸", "Nigeria": "🇳🇬", "Mexico": "🇲🇽",
};

export default function AboutPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    client
      .fetch<Category[]>(
        `*[_type == "category"] | order(displayOrder asc)[0...6] {
          _id, name, slug, "imageUrl": image.asset->url
        }`
      )
      .then((data) => setCategories(data))
      .catch(() => {});
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)", color: "white" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden text-center" style={{ paddingTop: "80px" }}>
        {/* Dark radial bg */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, #1a1200 0%, #0f0d00 35%, #0f0f0f 70%)" }} />
        {/* Fine grid */}
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(234,179,8,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        {/* Bold grid overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(234,179,8,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.12) 1px, transparent 1px)", backgroundSize: "200px 200px" }} />
        <GearBackground />
        {/* Gold glow center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.12) 0%, transparent 65%)" }} />
        {/* Corner glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(circle at 80% 10%, rgba(234,179,8,0.08) 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Est. 1963 · Chennai · Ahmedabad
          </p>
          <h1 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)" }}>
            Our <span style={{ color: "var(--gold)" }}>Story</span>
          </h1>
          {/* Highlighted tagline */}
          <div className="inline-block relative mx-auto">
            <div className="absolute inset-0 rounded-xl blur-md" style={{ background: "rgba(234,179,8,0.15)" }} />
            <p className="relative px-6 py-3 rounded-xl text-base md:text-lg font-bold border" style={{ color: "#f5f5f5", borderColor: "rgba(234,179,8,0.3)", background: "rgba(234,179,8,0.06)", fontStyle: "italic", letterSpacing: "0.01em" }}>
              ✦ &nbsp;"Machines on which people like overtime."&nbsp; ✦
            </p>
          </div>
        </div>
      </section>

      {/* ── LEGACY ── */}
      <section className="py-10 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              A Legacy Built Over <span style={{ color: "var(--gold)" }}>Six Decades</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { year: "1963", title: "Group Founded", desc: "Late Mr. G.L. Agarwal laid the foundation of MODI Machines Group — a vision to bring world-class machinery to Indian industry." },
              { year: "2012", title: "Max Machine Tools", desc: "Mr. Jabesh Bagdy scaled the legacy forward, establishing Max Machine Tools to serve modern India's manufacturing needs." },
              { year: "Today", title: "Pan-India & Export", desc: "Two offices, thousands of SME to corporate customers, and exports to Dubai, Kuwait, Malaysia, Sri Lanka, Canada, USA, Philippines and more." },
            ].map((item) => (
              <div key={item.year} className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.12)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.4)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.12)"}
              >
                <div className="text-3xl font-black mb-1" style={{ color: "var(--gold)" }}>{item.year}</div>
                <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-10 px-6" style={{ background: "#111" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Who We Are</p>
            <h2 className="text-2xl md:text-3xl font-black mb-1 leading-tight text-white">
              We Feel Your <span style={{ color: "var(--gold)" }}>Pain Points.</span>
            </h2>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#737373" }}>
              Then We Solve Them — With the Right Machine.
            </h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#a3a3a3" }}>
              At Max Machine Tools, we listen before we sell. We understand your job requirements, your production challenges, and your budget — and then we recommend the{" "}
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>right solution</span>, not just any machine.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#a3a3a3" }}>
              From selection and installation to after-sales support and spare parts — we stay with you long after the invoice. We also carry our own brands —{" "}
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>HABA, PRG, VELSE, and Airdass</span> — designed and manufactured by MMT.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>
              Beyond machines, we help customers explore{" "}
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>IT-driven automation</span> to streamline operational work — so your team can focus on what they do best.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              {categories.length > 0
                ? categories.map((cat) => (
                    <Link key={cat._id} href={`/products/${cat.slug.current}`}
                      className="rounded-xl border text-center p-4 flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                      style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.12)" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.4)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.12)"}
                    >
                      {cat.imageUrl
                        ? <div className="relative w-8 h-8"><Image src={cat.imageUrl} alt={cat.name} fill className="object-cover rounded" sizes="32px" /></div>
                        : <GearIcon />}
                      <p className="text-xs font-semibold leading-snug text-white">{cat.name}</p>
                    </Link>
                  ))
                : Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-xl border h-20 animate-pulse" style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.08)" }} />
                  ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs mb-2" style={{ color: "#737373" }}>...and many more categories</p>
              <Link href="/products" className="inline-block text-xs font-bold px-4 py-2 rounded-lg border transition-all duration-200 hover:bg-yellow-400/10"
                style={{ color: "var(--gold)", borderColor: "rgba(234,179,8,0.3)" }}>
                Visit Product Catalog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10 px-6" style={{ background: "var(--gold)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "60+", label: "Years of Group Legacy" },
            { number: "5000+", label: "Customers Served" },
            { number: "2", label: "Offices · Chennai & Ahmedabad" },
            { number: "10+", label: "Export Countries" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black text-black mb-1">{stat.number}</div>
              <p className="text-xs font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-10 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Why Max Machine Tools</p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              What Makes Us <span style={{ color: "var(--gold)" }}>Different</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "🎯", title: "Solution-First Approach", desc: <>We listen first. Understand your job, then recommend the <span style={{ color: "var(--gold)", fontWeight: 600 }}>right tool for the right job</span> — always.</> },
              { icon: "🌍", title: "Global Ideas, Made in India", desc: <>Concepts, technology, and ideas sourced from <span style={{ color: "var(--gold)", fontWeight: 600 }}>USA, Italy, Japan, and Taiwan</span> — designed and manufactured in India.</> },
              { icon: "🔧", title: "After-Sales Support", desc: <>Spare parts, on-site support, expert guidance long after purchase. <span style={{ color: "var(--gold)", fontWeight: 600 }}>We don't disappear after the sale.</span></> },
              { icon: "⚡", title: "Shortest Lead Time", desc: "Ready-in-stock display and demo at our showroom-cum-godowns. We deliver fast because your production can't wait." },
              { icon: "📦", title: "Pan-India & Export", desc: <>Kashmir to Kanyakumari, Bhuj to Walong — and beyond to <span style={{ color: "var(--gold)", fontWeight: 600 }}>Dubai, Canada, Malaysia, and more.</span></> },
              { icon: "💻", title: "IT & Automation Advisory", desc: <>We help automate operations using <span style={{ color: "var(--gold)", fontWeight: 600 }}>technology and IT solutions</span> — so your team focuses on core work.</> },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.12)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.4)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.12)"}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-10 px-6" style={{ background: "#111" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="pl-6 py-4 border-l-4" style={{ borderColor: "var(--gold)" }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Our Vision</p>
            <p className="text-white text-base font-semibold leading-relaxed">
              To be recognised as the most reputed and reliable company that designs, manufactures, and supplies machineries and accessories across India and beyond.
            </p>
          </div>
          <div className="pl-6 py-4 border-l-4" style={{ borderColor: "rgba(234,179,8,0.35)" }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Our Mission</p>
            <p className="text-white text-base font-semibold leading-relaxed">
              To ship peace of business — satisfy every machinery need with the right balance of cost, quality, and speed.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-10 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Leadership</p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              The People Behind <span style={{ color: "var(--gold)" }}>MMT</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                initial: "G",
                name: "Late Mr. G.L. Agarwal",
                role: "Founder, MODI Machines Group (1963)",
                desc: "Visionary who laid the foundation of the MODI Machines Group's six-decade legacy in industrial machinery.",
              },
              {
                initial: "P",
                name: "Late Mr. P.R. Garg",
                role: "Group Leader · Dean, IPM · Founder Trustee, JC",
                desc: "A deeply honored leader — Dean of the Institute of Power Ministry (IPM) under Jesus Calls ministry, Founder Trustee at JC, and his legacy lives on at Karunya Institute of Technology & Sciences where the P.R. Garg Residence stands in his honor.",
              },
              {
                initial: "J",
                name: "Mr. Jabesh Bagdy",
                role: "Director, Max Machine Tools",
                desc: "BBA · MBA · NISM Certified Research Analyst · Trained by MK Morse USA · Also connected with Laser Unlimited, JB Service Solutions (India), and Kerdoss Trade India (SEBI Registered RA). Building MMT into a modern, IT-forward machinery company.",
              },
            ].map((person) => (
              <div key={person.name} className="rounded-2xl p-6 border transition-all duration-300"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.12)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.4)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.12)"}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black mb-4"
                  style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.3)", color: "var(--gold)" }}>
                  {person.initial}
                </div>
                <h3 className="font-bold text-sm text-white mb-1">{person.name}</h3>
                <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: "var(--gold)" }}>{person.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#a3a3a3" }}>{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-10 px-6" style={{ background: "#111" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Our Offices</p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Two Cities. <span style={{ color: "var(--gold)" }}>One Standard.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { city: "Chennai", badge: "Headquarters", detail: "Tamil Nadu, India", note: "Main office and showroom-cum-godown with ready-in-stock display and live demos." },
              { city: "Ahmedabad", badge: "Western India Hub", detail: "Gujarat, India", note: "Serving western India's growing industrial and manufacturing sector." },
            ].map((loc) => (
              <div key={loc.city} className="rounded-2xl p-6 border transition-all duration-300"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.12)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.4)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.12)"}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-black text-white">{loc.city}</h3>
                  <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: "var(--gold)", background: "rgba(234,179,8,0.1)" }}>{loc.badge}</span>
                </div>
                <p className="text-xs mb-2" style={{ color: "#525252" }}>{loc.detail}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{loc.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-10 px-6 text-center" style={{ background: "var(--bg-primary)" }}>
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Certifications & Registrations</p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
          Trusted. <span style={{ color: "var(--gold)" }}>Verified. Compliant.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { badge: "ISO", label: "ISO Certified" },
            { badge: "MSME", label: "MSME Registered" },
            { badge: "IEC", label: "Import Export Code" },
            { badge: "GST", label: "33AAWFM0648L1ZS" },
          ].map((cert) => (
            <div key={cert.badge} className="rounded-2xl px-4 py-5 flex flex-col items-center gap-2 border transition-all duration-300"
              style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.2)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.5)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.2)"}
            >
              <span className="text-xl font-black" style={{ color: "var(--gold)" }}>{cert.badge}</span>
              <span className="text-xs text-center" style={{ color: "#a3a3a3" }}>{cert.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-10 px-6" style={{ background: "#111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Trusted By</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            India's Best Companies <span style={{ color: "var(--gold)" }}>Trust MMT</span>
          </h2>
          <p className="text-sm mb-7 max-w-xl mx-auto" style={{ color: "#a3a3a3" }}>
            From TATA and Hyundai to Godrej, Siemens, BARC, and IIT Dharwad — we serve every sector that makes India run.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "TATA","Hyundai","Ford","Godrej","Siemens","L&T",
              "Jaguar","FLSmidth","MRF","Ashok Leyland","Komatsu",
              "Johnson Lifts","Pfizer","Motherson","Parker","BARC",
              "IIT Dharwad","Ramco Cements","Aditya Birla","NSK","Polyhose",
            ].map((name) => (
              <span key={name} className="rounded-full px-4 py-2 text-sm font-bold border transition-all duration-200 cursor-default"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(255,255,255,0.08)", color: "#ffffff" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#eab308"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                {name}
              </span>
            ))}
            <span className="rounded-full px-4 py-2 text-sm font-bold" style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.3)", color: "var(--gold)" }}>
              +5000 more
            </span>
          </div>
        </div>
      </section>

      {/* ── EXPORTS ── */}
      <section className="py-10 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Global Reach</p>
          <h2 className="text-2xl font-black text-white mb-5">
            We Export To <span style={{ color: "var(--gold)" }}>10+ Countries</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(countryFlags).map(([country, flag]) => (
              <span key={country} className="rounded-full px-4 py-2 text-sm border"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(255,255,255,0.06)", color: "#a3a3a3" }}>
                {flag} {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-6 text-center" style={{ background: "#111" }}>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Ready to Find the <span style={{ color: "var(--gold)" }}>Right Machine?</span>
        </h2>
        <p className="text-sm mb-7 max-w-lg mx-auto" style={{ color: "#a3a3a3" }}>
          Tell us your requirement. We'll understand your pain points, suggest the right solution, and support you all the way.
        </p>
        <button
          onClick={() => openEnquiryModal()}
          className="inline-block font-black px-10 py-4 rounded-xl text-base transition-all duration-300 hover:scale-105 hover:brightness-110"
          style={{ background: "var(--gold)", color: "#0f0f0f" }}
        >
          Enquire Now →
        </button>
      </section>

      <SocialStrip />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
