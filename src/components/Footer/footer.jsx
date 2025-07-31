import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './footer.css';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef(null);

  useGSAP(() => {
    // This animation targets the footer brand
    gsap.from(".footer-brand", {
      scrollTrigger: {
        trigger: ".footer-brand", // The element that starts the animation
        start: "top 95%",        // Start when the top of the element is 95% down the viewport
        once: true,              // Only run the animation once
      },
      yPercent: 100,             // Start 100% of its own height below its final position
      opacity: 0,                // Start completely transparent
      duration: 0.7,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <footer className="footer-container" ref={container}>
      <div className="footer-top">
        <p className="footer-tagline">
          Your success is our favorite <span className="highlight">story.</span>
        </p>
        <nav className="footer-nav">
          <ul>
            <li><a href="mailto:hello@fableandfolk.com">hello@fableandfolk.com</a></li>
            <li><a href="/work">WORK</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-middle">
        <h2 className="footer-brand">Fable&folk</h2>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          COPYRIGHT 2025 FABLE&FOLK. ALL RIGHTS RESERVED
        </p>
        <p className="footer-made-in">
          MADE WITH ♥ IN INDIA
        </p>
      </div>
    </footer>
  );
};

export default Footer;