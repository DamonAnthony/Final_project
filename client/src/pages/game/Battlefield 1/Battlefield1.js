import React from "react";
import "./Battlefield1.css";

const Battlefield1 = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Battlefield 1</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/c7nRTF2SowQ"
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
            src={require("../../../games/Battlefield 1/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield 1/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield 1/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield 1/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            Experience the dawn of all-out war in Battlefield 1. Fight your way
            through epic battles ranging from tight urban combat in a besieged
            French city to the heavily defended mountain forts in the Italian
            Alps or frantic combats in the deserts of Arabia. Discover a new
            world at war through an adventure-filled campaign, or join in epic
            multiplayer battles with up to 64 players, and adapt your tactics to
            the earth-shattering environments and destruction. Fight as infantry
            or take control of amazing vehicles on land, air and sea, from the
            tanks and bikes on the ground, to biplanes and gigantic battleships,
            and adapt your gameplay to the most dynamic battles in Battlefield
            history.
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
          {`Minimum Requirements

OS: 64-bit Windows 7, Windows 8.1 and Windows 10
Processor (AMD): AMD FX-6350
Processor (Intel): Intel Core i5 6600K
Memory: 8GB RAM
Graphics card (AMD): AMD Radeon™ HD 7850 2GB
Graphics card (NVIDIA): NVIDIA GeForce® GTX 660 2GB
DirectX: 11.0 Compatible video card or equivalent
Online Connection Requirements: 512 KBPS or faster Internet connection
Hard-drive space: 50GB


Recommended Requirements

OS: 64-bit Windows 10 or later
Processor (AMD): AMD FX 8350 Wraith
Processor (Intel): Intel Core i7 4790 or equivalent
Memory: 16GB RAM
Graphics card (AMD): AMD Radeon™ RX 480 4GB
Graphics card (NVIDIA): NVIDIA GeForce® GTX 1060 3GB
DirectX: 11.1 Compatible video card or equivalent
Online Connection Requirements: 512 KBPS or faster Internet connection
Hard-drive space: 50GB
`}
        </pre>
      </div>
    </div>
  );
};

export default Battlefield1;
