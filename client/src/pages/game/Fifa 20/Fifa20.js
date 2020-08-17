import React from "react";
import "./Fifa20.css";

const Fifa20 = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Fifa 20</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/vgQNOIhRsV4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </div>
      <h1 className="screenshots-heading">Screenshots</h1>
      <div className="screenshots">
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Fifa 20/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Fifa 20/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Fifa 20/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Fifa 20/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            Powered by Frostbite™, EA SPORTS™ FIFA 20 for PC brings two sides of
            The World’s Game to life: the prestige of the professional stage and
            an all-new street football experience in EA SPORTS VOLTA FOOTBALL.
            FIFA 20 innovates across the game, FOOTBALL INTELLIGENCE unlocks an
            unprecedented platform for gameplay realism, FIFA Ultimate Team™
            offers more ways to build your dream squad and EA SPORTS VOLTA
            FOOTBALL returns the game to the streets with an authentic form of
            small-sided football.
          </p>
        </div>
        <div className="price-card">
          <h4 className="price">R349.95</h4>
          <a
            className="waves-effect waves-light btn payment-btn"
            href="/Payment"
          >
            <i className="material-icons left">shopping_cart</i>Purchase
          </a>
        </div>
      </div>
      <div className="game-requirements">
        <pre>
          {`MINIMUM REQUIREMENTS

OS: 64-bit Windows 7/8.1/10
Processor (AMD): Phenom II X4 965 or Equivalent
Processor (Intel): i3-2100 or Equivalent
Memory: 8 GB
Graphics card (AMD): Radeon HD 7850 or Equivalent
Graphics card (NVIDIA): GeForce GTX 660 or Equivalent
Online Connection Requirements: 512 KBPS or faster Internet connection
Hard-drive space: 50 GB

RECOMMENDED REQUIREMENTS

OS: 64-bit Windows 10
Processor (AMD): FX 8150 or Equivalent
Processor (Intel): i5-3550 or Equivalent
Memory: 8 GB
Graphics card (AMD): Radeon R9 270X or Equivalent
Graphics card (NVIDIA): GeForce GTX 670 or Equivalent
Online Connection Requirements: Broadband Connection
Hard-drive space: 50 GB`}
        </pre>
      </div>
    </div>
  );
};

export default Fifa20;
