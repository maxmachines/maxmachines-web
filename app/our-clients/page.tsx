"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStrip from "@/components/SocialStrip";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

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
  </svg>
);

const SECTORS = [
  {
    id: "automotive",
    label: "Automotive",
    icon: "🚗",
    clients: [
      "TATA", "Hyundai", "Ford", "Force Motors", "TI India", "Ashok Leyland",
      "Uno Minda", "Motherson", "KDDL", "Hyundai Steel", "Rico", "Dymos",
      "Lear", "INZI", "Yazaki", "Somic ZF", "LS Automotive",
      "Deltronix Automotive", "Indrad Auto Components", "Nexteer Automotive",
    ],
  },
  {
    id: "heavy",
    label: "Heavy Engineering & Steel",
    icon: "⚙️",
    clients: [
      "FLSmidth", "Komatsu", "ISGEC", "Gannon Dunkerley", "Eimco KCP",
      "Shardlow", "Taeyang Metal", "Mayekawa", "SBO Steels", "Sargam Metals",
      "Reliance Steel", "GBR TMT", "ARS Steel", "Kesar Steel",
      "Ramind Cold Forge", "Midhani", "Sub Zero", "Chetna Steel Tubes",
    ],
  },
  {
    id: "electrical",
    label: "Electrical & Electronics",
    icon: "⚡",
    clients: [
      "Siemens", "Toshiba", "Andritz", "Salcomp", "Grinco", "On Load Gears",
      "Consul Neowatt", "Voltech", "Unipower", "Oiltech", "WIKA",
      "Seonics", "Laulagun Bearings", "NSK", "Parker", "Powergrid",
    ],
  },
  {
    id: "pharma",
    label: "Chemicals & Pharma",
    icon: "💊",
    clients: [
      "Pfizer", "Pinnacle Lifescience", "Vigneshh Pharma",
      "DCW Limited", "Alpha Polymers", "Corrubber",
    ],
  },
  {
    id: "building",
    label: "Building & Infrastructure",
    icon: "🏗️",
    clients: [
      "Kajaria", "Somany", "Centuryply", "Greenply", "Ramco Cements",
      "Aditya Birla", "Hindalco", "NCC Limited", "Star Pipes",
      "Shirke", "Pace Builders",
    ],
  },
  {
    id: "defence",
    label: "Defence & Research",
    icon: "🛡️",
    clients: [
      "BARC", "IIT Dharwad", "IIT Madras", "Tamil Nadu Police", "TANUVAS",
      "Birla Institute of Technology", "Skyroot Aerospace", "Sameer", "CPCL",
    ],
  },
  {
    id: "industrial",
    label: "Industrial & Others",
    icon: "🔩",
    clients: [
      "Polyhose", "Preethi", "MRF", "Jaquar", "Fleetguard", "Johnson Lifts",
      "Toray", "Moglix", "Stanson", "ITW", "Paragon", "Gurit", "Rockworth",
      "Econ", "Sahay Industries", "Western Airducts", "e-con Systems",
      "Easy Elevator", "Avanti Leathers", "KLT Group", "Tru Cut",
    ],
  },
];

const ALL_SECTORS_ID = "all";

const EXPORTS = [
  { flag: "🇦🇪", name: "Dubai" },
  { flag: "🇰🇼", name: "Kuwait" },
  { flag: "🇳🇵", name: "Nepal" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇱🇰", name: "Sri Lanka" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇨🇦", name: "Canada" },
];


function ClientBadge({ name }: { name: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-xs font-bold border transition-all duration-200 cursor-default hover:-translate-y-px"
      style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.1)", color: "#e5e5e5" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.45)";
        (e.currentTarget as HTMLElement).style.color = "#eab308";
        (e.currentTarget as HTMLElement).style.background = "rgba(234,179,8,0.06)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.1)";
        (e.currentTarget as HTMLElement).style.color = "#e5e5e5";
        (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)";
      }}
    >
      {name}
    </span>
  );
}

export default function OurClientsPage() {
  const { openEnquiryModal } = useEnquiryModal();
  const [activeTab, setActiveTab] = useState(ALL_SECTORS_ID);

  const visibleSectors =
    activeTab === ALL_SECTORS_ID
      ? SECTORS
      : SECTORS.filter((s) => s.id === activeTab);

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)", color: "white" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden text-center" style={{ paddingTop: "80px" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, #1a1200 0%, #0f0d00 35%, #0f0f0f 70%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(234,179,8,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(234,179,8,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.12) 1px, transparent 1px)", backgroundSize: "200px 200px" }} />
        <GearBackground />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.12) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            5000+ Customers · Pan-India &amp; Export
          </p>
          <h1 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)" }}>
            Trusted by <span style={{ color: "var(--gold)" }}>India&apos;s Best</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#a3a3a3" }}>
            From SMEs to Fortune 500 companies — across automotive, defence, pharma, cement, and heavy engineering.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 px-6" style={{ background: "var(--gold)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "5000+", label: "Customers Served" },
            { number: "7", label: "Sectors Covered" },
            { number: "28+", label: "States Pan-India" },
            { number: "11", label: "Export Countries" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black text-black mb-1">{stat.number}</div>
              <p className="text-xs font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTOR TABS + CLIENT GRID ── */}
      <section className="py-14 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Our Clients</p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              200+ Companies <span style={{ color: "var(--gold)" }}>Trust MMT</span>
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#737373" }}>
              A sampling across industries — from single-location shops to global manufacturers.
            </p>
          </div>

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveTab(ALL_SECTORS_ID)}
              className="text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                background: activeTab === ALL_SECTORS_ID ? "var(--gold)" : "var(--bg-secondary)",
                borderColor: activeTab === ALL_SECTORS_ID ? "var(--gold)" : "rgba(234,179,8,0.2)",
                color: activeTab === ALL_SECTORS_ID ? "#0f0f0f" : "#a3a3a3",
              }}
            >
              All Sectors
            </button>
            {SECTORS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className="text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200"
                style={{
                  background: activeTab === s.id ? "var(--gold)" : "var(--bg-secondary)",
                  borderColor: activeTab === s.id ? "var(--gold)" : "rgba(234,179,8,0.2)",
                  color: activeTab === s.id ? "#0f0f0f" : "#a3a3a3",
                }}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Sector blocks */}
          <div className="space-y-8">
            {visibleSectors.map((sector) => (
              <div
                key={sector.id}
                className="rounded-2xl border p-6"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.1)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{sector.icon}</span>
                  <h3 className="font-black text-sm text-white tracking-wide uppercase">{sector.label}</h3>
                  <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(234,179,8,0.1)", color: "var(--gold)", border: "1px solid rgba(234,179,8,0.25)" }}>
                    {sector.clients.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sector.clients.map((name) => (
                    <ClientBadge key={name} name={name} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: "#525252" }}>
            Real logos coming soon · Showing named clients out of 5000+ total
          </p>
        </div>
      </section>

      {/* ── EXPORTS ── */}
      <section className="py-12 px-6" style={{ background: "#111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Global Reach</p>
          <h2 className="text-2xl font-black text-white mb-6">
            We Export to <span style={{ color: "var(--gold)" }}>11 Countries</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {EXPORTS.map((country) => (
              <span
                key={country.name}
                className="rounded-full px-4 py-2 text-sm font-semibold border"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(255,255,255,0.06)", color: "#a3a3a3" }}
              >
                {country.flag} {country.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-10 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 border text-center" style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.2)" }}>
            <div className="text-4xl mb-4" style={{ color: "var(--gold)", lineHeight: 1 }}>"</div>
            <p className="text-base md:text-lg font-semibold leading-relaxed text-white mb-5" style={{ fontStyle: "italic" }}>
              From our first machine to our hundredth — MMT has been there with the right product, fair pricing, and genuine after-sales support. They don&apos;t just sell machines, they build relationships.
            </p>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              — A satisfied customer from the automotive sector
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 text-center" style={{ background: "#111" }}>
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Join 5000+ Satisfied Customers</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Ready to Be Our <span style={{ color: "var(--gold)" }}>Next Success Story?</span>
        </h2>
        <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "#a3a3a3" }}>
          Tell us your requirement. We&apos;ll find the right machine, at the right price, with support that lasts.
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
