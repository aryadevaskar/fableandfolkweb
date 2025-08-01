import React from "react";
import './tickerband.css';

const TickerBand = ({ text }) => {
  const items = Array.from({ length: 10 });

  const tickerContent = (
    <>
      {items.map((_, index) => (
        <span key={index}>
          <span>{text}</span>
          <span className="ticker-italic">{text}</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="ticker-band">
      <div className="ticker-track">
        <div className="ticker-content">{tickerContent}</div>
        <div className="ticker-content" aria-hidden="true">
          {tickerContent}
        </div>
      </div>
    </div>
  );
};

export default TickerBand;
