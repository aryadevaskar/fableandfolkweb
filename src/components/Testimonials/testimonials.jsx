"use client";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialsData from "../../Data/testimonialData";
import "./testimonials.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const container = useRef(null);
  const testimonialsCount = TestimonialsData.length;

  // Auto-slide every 6 seconds (no change to this logic)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonialsCount]);

  // Animation for the static section heading on scroll
  useGSAP(() => {
    gsap.from(container.current.querySelector("h2"), {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: container });

  // This useEffect hook runs every time the 'index' state changes
  useGSAP(() => {
    // Animate the new testimonial content entering
    const tl = gsap.timeline();
    tl.from(".testimonial-logo", {
      opacity: 0,
      scale: 0.8,
      ease: "power2.out",
      duration: 0.5
    })
    .from(".testimonial-text p", {
      opacity: 0,
      y: 20,
      stagger: 0.15, // Animates the quote and author one after the other
      ease: "power2.out",
      duration: 0.5
    }, "-=0.3"); // Overlap with previous animation

    // Add a subtle pulse animation to the newly active dot
    gsap.fromTo(
      ".dot.active",
      { scale: 0.7 },
      { scale: 1, duration: 0.4, ease: "back.out(1.7)" }
    );
  }, { dependencies: [index], scope: container }); // Re-run when index changes

  const current = TestimonialsData[index];

  return (
    <section className="testimonials" ref={container}>
      <h2>
        Hear it from the <span className="highlight">folk</span>
      </h2>
      <div className="testimonial-box">
        <div className="testimonial-logo">
          <img src={current.logo} alt={current.company} />
        </div>
        <div className="testimonial-text">
          <p>“ {current.feedback} ”</p>
          <p className="testimonial-author">
            — <em>{current.name}, {current.company}</em>
          </p>
        </div>
      </div>
      <div className="testimonial-dots">
        {TestimonialsData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}