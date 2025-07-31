"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

import "./Client.css";

gsap.registerPlugin(ScrollTrigger);

export default function ClientSection() {
  const container = useRef(null);

  useGSAP(() => {
    let clientTitle, clientContent;

    // Use a short timeout to ensure the DOM is fully ready
    const timer = setTimeout(() => {
      if (container.current) {
        const titleEl = container.current.querySelector('.client-title h1');
        const contentEl = container.current.querySelector('.client-content p');

        if (titleEl && contentEl) {
          clientTitle = new SplitType(titleEl, { types: 'lines' });
          clientContent = new SplitType(contentEl, { types: 'lines' });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top 75%",
              once: true,
            }
          });

          tl.from(clientTitle.lines, {
            y: "100%",
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
          }).from(clientContent.lines, {
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
      if (clientTitle) clientTitle.revert();
      if (clientContent) clientContent.revert();
    };

  }, { scope: container });

  return (
    <section className="Client-story" ref={container}>
      <div className="about-client">
        <div className="client-title">
          <h1>
            So, What's
            <br />
            Your <span className="span-2">Story</span>?
          </h1>
        </div>

        <div className="client-content">
          <p>
            Every great business has one. It’s in the late nights you’ve worked,
            the passion behind your craft, and the reason you started in the first
            place. But telling that story online can be hard. You deserve a
            website that does more than just list your services—it should capture
            the unique character of your brand and connect with the people who
            need you most.
          </p>
        </div>
      </div>
    </section>
  );
}