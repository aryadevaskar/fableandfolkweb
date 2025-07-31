"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const container = useRef(null);

  useGSAP(() => {
    let ourTitle, ourContent;

    // Use a short timeout to ensure the DOM is fully ready
    const timer = setTimeout(() => {
      if (container.current) {
        const titleEl = container.current.querySelector('.about-title h1');
        const contentEl = container.current.querySelector('.about-content p');

        if (titleEl && contentEl) {
          ourTitle = new SplitType(titleEl, { types: 'lines' });
          ourContent = new SplitType(contentEl, { types: 'lines' });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top 75%",
              once: true,
            }
          });

          tl.from(ourTitle.lines, {
            y: "100%",
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
          }).from(ourContent.lines, {
            y: 50,
            opacity: 0,
            stagger: 0.04,
            duration: 0.6,
            ease: "power2.out",
          }, "-=0.3");
        }
      }
    }, 100); // A small delay of 100ms

    // The cleanup function
    return () => {
      clearTimeout(timer); // Clean up the timer
      if (ourTitle) ourTitle.revert();
      if (ourContent) ourContent.revert();
    };

  }, { scope: container });

  return (

    // Add the ref to the main section so ScrollTrigger can track it
    <section className="Our-story" id="aboutus" ref={container}>
      <div className="about-us">
        <div className="about-title">
          <h1>The Way <br/>We <span className='span'>Weave</span></h1>
        </div>
        <div className="about-content">
          <p>
            At Fable & Folk, we believe character is the difference between a
            website and a brand. That’s why our process is personal. As your
            dedicated two-person team, we dive deep into your story to
            understand what makes your business unique. We then translate that
            character into a thoughtfully crafted website or Shopify store—a
            digital presence that feels authentically you and is built to
            deliver tangible results.
          </p>
        </div>
      </div>
    </section>
  );
}