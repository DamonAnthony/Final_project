import React from "react";
import "./Madden20.css";

const Madden20 = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Madden 20</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/oHOudL5d14M"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h1 className="screenshots-heading">Screenshots</h1>
      <div className="screenshots">
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Madden 20/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Madden 20/Screenshots/S2.png")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Madden 20/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            Face of the Franchise: QB1 - Be the Face of an NFL franchise where
            the decisions you make matter in your journey to become an NFL
            Superstar. Create your own College Quarterback to play through the
            College Football National Championship playoffs and the NFL Combine
            for your shot at the NFL Draft and to be the face of a franchise in
            a new and personalized career campaign mode centered around you.
          </p>
        </div>
        <div className="price-card">
          <h3 className="price">R349.95</h3>
          <a className="waves-effect waves-light btn payment-btn" href="!#">
            <i className="material-icons left">shopping_cart</i>Purchase
          </a>
        </div>
      </div>
      <div className="game-requirements">
        <pre>
          {`MINIMUM REQUIREMENTS

OS: 64-bit Windows 7/8.1/10
Processor (AMD): FX-4330 or Equivalent
Processor (Intel): i3-4350 or Equivalent
Memory: 8 GB
Graphics card (AMD): Radeon RX 460 or Equivalent
Graphics card (NVIDIA): GeForce GTX 660 or Equivalent
DirectX: 11 Compatible video card or equivalent
Online Connection Requirements: 512 KBPS or faster Internet connection
Hard-drive space: 48.5 GB

RECOMMENDED REQUIREMENTS

OS: 64-bit Windows 10
Processor (AMD): FX-4330 or Equivalent
Processor (Intel): i3-4350 or Equivalent
Memory: 8 GB
Graphics card (AMD): Radeon R9 270x or Equivalent
Graphics card (NVIDIA): GeForce GTX 670 or Equivalent
DirectX: 12 Compatible video card or equivalent
Online Connection Requirements: Broadband Connection
Hard-drive space: 48.5 GBssss`}
        </pre>
      </div>
    </div>
  );
};

export default Madden20;
