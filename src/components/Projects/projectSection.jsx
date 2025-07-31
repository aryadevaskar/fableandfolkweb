"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ProjectsData from "../../Data/projectData";
import "./project.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const container = useRef(null);

  useGSAP(() => {
    // 1. Animate the main section heading
    gsap.from(".section-Heading h2", {
      scrollTrigger: {
        trigger: ".section-Heading",
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // 2. Animate each project card as it scrolls into view
    const projectCards = gsap.utils.toArray(".projectArray");
    projectCards.forEach((card, index) => {
      // Find the elements within each specific card
      const image = card.querySelector(".image-1");
      const contentElements = card.querySelectorAll(".p1-content h2, .p1-content p, .p1-content button");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Check the index to create the converging animation
      if (index % 2 === 0) {
        // EVEN Card (index 0, 2...): Image Left, Content Right
        tl.from(image, {
          opacity: 0,
          scale: 0.98,
          duration: 0.5,
          ease: "power3.out",
        }).from(contentElements, {
          x: 40,
          opacity: 0,
          stagger: 0.1, // Stagger the h2, p, and button animations
          duration: 0.5,
          ease: "power3.out",
        },); // Overlap for a seamless effect
      } else {
        // ODD Card (index 1, 3...): Content Left, Image Right
        tl.from(image, {
          opacity: 0,
          scale: 0.98,
          duration: 0.5,
          ease: "power3.out",
        }).from(contentElements, {
          x: -40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    });

  }, { scope: container });

  return (
    <section className="Latest-projects" id="ourworks" ref={container}>
      <div className="section-Heading">
        <h2>LATEST PROJECTS</h2>
      </div>

      {ProjectsData.map((project, index) => (
        <div className="projectArray" key={project.id}>
          <div className="p-1">
            {index % 2 === 0 ? (
              <>
                <div className="image-1">
                  <Link to={`/work/${project.id}`}>
                    <img src={project.image} alt={project.title} className="project-image"/>
                  </Link>
                </div>
                <div className="p1-content">
                  <div>
                    <h2>{project.title}</h2>
                  </div>
                  <div>
                    <p>{project.description}</p>
                  </div>
                  <div>
                    <Link to={`/work/${project.id}`}>
                      <button id={`p-${index + 1}`}>view</button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p1-content">
                  <div>
                    <h2>{project.title}</h2>
                  </div>
                  <div>
                    <p>{project.description}</p>
                  </div>
                  <div>
                    <Link to={`/work/${project.id}`}>
                      <button id={`p-${index + 1}`}>view</button>
                    </Link>
                  </div>
                </div>
                <div className="image-1">
                  <Link to={`/work/${project.id}`}>
                    <img src={project.image} alt={project.title} className="project-image"/>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}