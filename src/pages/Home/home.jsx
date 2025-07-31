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

export default function Home()
{
    return(
    <div>
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