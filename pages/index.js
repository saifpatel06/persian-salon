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
        <title>Persian Salon | Men's Hair Care & Facials in Camp, Pune — 100+ Years</title>
        <meta
          name="description"
          content="Persian Salon — Camp, Pune's four-generation family salon, specialising in men's hair care and facials for more than 100 years. Innovative cutting and colour techniques, globally sourced products, and a passionate, creative team."
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
