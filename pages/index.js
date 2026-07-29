import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import WhatsAppFloat from "@/src/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Persian Salon | Men's Hair Care & Facials in Camp, Pune — 100+ Years
        </title>

        <meta
          name="description"
          content="Persian Salon in Camp, Pune offers men's haircuts, beard styling, hair spa, keratin treatments, hair coloring, facials, and premium grooming with over 100 years of trusted experience."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Persian Salon | Men's Hair Care & Facials in Camp, Pune — 100+ Years"
        />
        <meta
          property="og:description"
          content="Persian Salon in Camp, Pune offers men's haircuts, beard styling, hair spa, keratin treatments, hair coloring, facials, and premium grooming with over 100 years of trusted experience."
        />
      </Head>

      <Navbar />

      <Hero />
      <div className="pole-strip h-1.5 w-full" />
      <About />
      <Services />
      <div className="pole-strip h-1.5 w-full" />
      <Testimonials />
      <Contact />

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
