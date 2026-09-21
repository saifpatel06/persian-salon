import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Gallery from "@/src/components/Gallery";
import Testimonials from "@/src/components/Testimonials";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import WhatsAppFloat from "@/src/components/WhatsAppFloat";
import CallFloat from "@/src/components/CallFloat";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Persian Salon | Men's Hair Care & Facials in Camp, Pune — 100+ Years
        </title>

        <meta
          name="description"
          content="Persian Salon in Camp, Pune offers men's haircuts, beard styling, hair spa, keratin treatments, hair coloring, facials, threading, and premium grooming services backed by over 100 years of trusted experience."
        />

        <meta
          name="keywords"
          content="Persian Salon Pune, Men's Salon Pune, Haircut Pune, Beard Styling Pune, Hair Spa Pune, Keratin Treatment Pune, Hair Color Pune, Facial Pune, Camp Pune Salon, Barber Shop Pune"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta
          property="og:title"
          content="Persian Salon | Men's Hair Care & Facials in Camp, Pune — 100+ Years"
        />
        <meta
          property="og:description"
          content="Persian Salon in Camp, Pune offers men's haircuts, beard styling, hair spa, keratin treatments, hair coloring, facials, threading, and premium grooming services backed by over 100 years of trusted experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://persiansaloon.com/" />
        <meta
          property="og:image"
          content="https://persiansaloon.com/og-image.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://persiansaloon.com/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Persian Salon" />
        <meta property="og:locale" content="en_IN" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://persiansaloon.com/"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />
      <div className="pole-strip h-1.5 w-full" />
      <About />
      <Services />
      {/* <Gallery /> */}
      <div className="pole-strip h-1.5 w-full" />
      <Testimonials />
      <Contact />

      <Footer />
      <CallFloat />
      <WhatsAppFloat />
    </>
  );
}
