"use client";

import HeroSection from "../../components/Hero/hero";
import AboutSection from "../../components/About/About";
import ProjectSection from "../../components/Projects/projectSection";
import ClientSection from "../../components/Client/Client";
import TickerBand from "../../components/Ticker Band/tickerband";
import ContactForm from "../../components/Contact Form/contactform";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Testimonials from "../../components/Testimonials/testimonials";
import useSEO from "../../hooks/useSeo";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay to ensure DOM is rendered
      }
    }
  }, [location]);

  useSEO(
    "Branding & Web Design Agency in Hyderabad | Fable & Folk",
    "We turn stories into websites with character. Fable & Folk is a design studio in India crafting bespoke websites & Shopify stores for ambitious small businesses.",
    "https://fableandfolk.com/"
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fableandfolk.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://fableandfolk.com/work/",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ClientSection />
      <Testimonials />
      <TickerBand text="Get in touch" />
      <ContactForm />
      <Footer />
    </div>
  );
}
