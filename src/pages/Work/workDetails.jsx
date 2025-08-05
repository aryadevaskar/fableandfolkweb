"use client";
import "./work.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import workData from "../../Data/workData"; // adjust path as needed
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import TickerBand from "../../components/Ticker Band/tickerband";

export default function WorkDetailsSection() {
  const { id } = useParams();
  const work = workData.find((w) => w.id === parseInt(id));

  if (!work) return <div>Work not found</div>;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className="Our-work">
        <div className="header-container">
          <h1 className="project-title">{work.title}</h1>
          <p className="project-description">{work.description}</p>
        </div>

        <div className="work-image">
        <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="background-video"
        style={{
          width: "100%",
          height: "auto",
          border: "none", // This is the CSS equivalent of style={{ border: "none" }}
          padding: "3rem 0rem"
        }}
      >
        <source src={work.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
          {/* <img src={work.mainImage} alt="main" /> */}
        </div>

        <div className="fable-container">
          <div className="our-name">
            <h1>The Fable</h1>
            <p>{work.fable}</p>
          </div>
          <div className="our-story">
            <h1>The Folk</h1>
            <p>{work.folk}</p>
          </div>
        </div>

        <TickerBand text="The Craft" />

        <div className="Gallery-container">
          <div className="row-1">
            <img src={work.gallery[0]} alt="maya&mi1" />
            <img src={work.gallery[1]} alt="maya&mi2" />
          </div>
          <div className="row-2">
            <img src={work.gallery[2]} alt="maya&mi3" />
          </div>
          {/* <div className="row-3">
            <p>{work.gallery[3]}</p>
          </div> */}
        </div>

        <div className="quote-section">
          <div>
            <h1>{work.quote}</h1>
            <p>{work.quoteAuthor}</p>
          </div>
          <div>
            <button onClick={() => window.open('/'+ "#ourcontact", "_self")}>
              Work
              <br />
              With
              <br />
              Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
