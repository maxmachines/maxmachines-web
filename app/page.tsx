import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--navy)" }}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
