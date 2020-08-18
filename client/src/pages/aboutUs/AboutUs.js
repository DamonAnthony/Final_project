import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <h1 className="aboutUs-title">Shop for your PC games</h1>
      <p className="aboutUs-text">
        Get great deals on PC games right here at Bacon's Bits from FPS to RPGs,
        no matter your tastes, there's something here for everyone
      </p>
      <h1 className="aboutUs-title">What are you waiting for?</h1>
      <p className="aboutUs-text">
        Shop now and get that game you've been waiting for
      </p>
      <div className="store-btn">
        <a
          href="/Store"
          className="waves-effect waves-light btn white black-text"
        >
          Browse Store
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
