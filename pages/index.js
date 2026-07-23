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
        <title>Persian Salon | Hair, Skin & Bridal Studio in Camp, Pune</title>
        <meta
          name="description"
          content="Persian Salon — Camp, Pune's trusted destination for hair styling, skin & spa treatments, bridal makeup, and men's grooming. Serving clients with excellence since 2009."
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
