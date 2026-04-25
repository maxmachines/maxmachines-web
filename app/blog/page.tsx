"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStrip from "@/components/SocialStrip";

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

const PLACEHOLDER_POSTS = [
  {
    tag: "Maintenance Tips",
    title: "How to Extend the Life of Your Industrial Lathe",
    excerpt: "Proper lubrication, alignment checks, and spindle care can double the lifespan of your machine. Expert tips from 60+ years of hands-on experience.",
    readTime: "5 min read",
  },
  {
    tag: "Buying Guide",
    title: "Choosing the Right Grinding Machine for Your Shop Floor",
    excerpt: "Surface, cylindrical, or centerless? We break down the key differences and help you match the right grinder to your production requirements.",
    readTime: "7 min read",
  },
  {
    tag: "Industry Trends",
    title: "How Indian SMEs Are Embracing CNC Automation in 2025",
    excerpt: "From small job shops in Coimbatore to large-scale plants in Pune — CNC adoption is reshaping Indian manufacturing. Here's what's driving it.",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-5"
            style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.4)", color: "var(--gold)" }}>
            ✦ Coming Soon
          </div>
          <h1 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)" }}>
            Industry <span style={{ color: "var(--gold)" }}>Insights</span>{" "}&amp; Updates
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#a3a3a3" }}>
            Expert articles on industrial machinery, maintenance tips, and manufacturing trends.{" "}
            <span style={{ color: "var(--gold)", fontWeight: 600 }}>Coming soon.</span>
          </p>
        </div>
      </section>

      {/* ── PLACEHOLDER CARDS ── */}
      <section className="py-14 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Coming Soon</p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Articles We&apos;re <span style={{ color: "var(--gold)" }}>Working On</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLACEHOLDER_POSTS.map((post, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border relative"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.12)" }}
              >
                {/* Shimmer image placeholder */}
                <div className="relative h-44 overflow-hidden" style={{ background: "#1a1a1a" }}>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(234,179,8,0.08) 40%, rgba(234,179,8,0.18) 50%, rgba(234,179,8,0.08) 60%, transparent 100%)",
                      backgroundSize: "200% 100%",
                      animation: `shimmer ${1.8 + i * 0.3}s infinite linear`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" style={{ opacity: 0.12 }} aria-hidden="true">
                      <circle cx="32" cy="32" r="28" stroke="#eab308" strokeWidth="1.5" />
                      <circle cx="32" cy="32" r="8" stroke="#eab308" strokeWidth="2" />
                      {[0,45,90,135,180,225,270,315].map((a, j) => (
                        <rect key={j} x="29" y="2" width="6" height="10" rx="1" fill="#eab308" transform={`rotate(${a} 32 32)`} />
                      ))}
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: "rgba(234,179,8,0.1)", color: "var(--gold)", border: "1px solid rgba(234,179,8,0.25)" }}>
                    {post.tag}
                  </span>
                  <h3 className="font-black text-base text-white mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#737373" }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#525252" }}>{post.readTime}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", color: "#525252" }}>
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ── */}
      <section className="py-16 px-6" style={{ background: "#111" }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Stay Updated</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            Get Notified When We <span style={{ color: "var(--gold)" }}>Go Live</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: "#a3a3a3" }}>
            Be the first to receive expert machinery guides, maintenance tips, and industry news from MMT.
          </p>

          {submitted ? (
            <div className="rounded-xl px-6 py-5 border text-center" style={{ background: "rgba(234,179,8,0.07)", borderColor: "rgba(234,179,8,0.3)" }}>
              <p className="font-black text-base" style={{ color: "var(--gold)" }}>✓ You&apos;re on the list!</p>
              <p className="text-sm mt-1" style={{ color: "#a3a3a3" }}>We&apos;ll notify you when the blog launches.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl px-5 py-3 text-sm outline-none focus:ring-2"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid rgba(234,179,8,0.2)",
                  color: "white",
                  // @ts-expect-error CSS custom property
                  "--tw-ring-color": "rgba(234,179,8,0.4)",
                }}
              />
              <button
                type="submit"
                className="font-black px-7 py-3 rounded-xl text-sm transition-all duration-300 hover:brightness-110 hover:scale-105"
                style={{ background: "var(--gold)", color: "#0f0f0f" }}
              >
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </section>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <SocialStrip />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
