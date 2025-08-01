"use client"


import HeroSection from "../../components/Hero/hero";
import AboutSection from "../../components/About/About";
import ProjectSection from "../../components/Projects/projectSection";
import ClientSection from "../../components/Client/Client";
import TickerBand from "../../components/Ticker Band/tickerband"
import ContactForm from "../../components/Contact Form/contactform";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Testimonials from "../../components/Testimonials/testimonials";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home()
{
  const location = useLocation();
  
  useEffect(()=>{
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
  },[location]);


    return(
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ClientSection/>
      <Testimonials />
      <TickerBand text='Get in touch'/>
      <ContactForm />
      <Footer />
    </div>
    );
}