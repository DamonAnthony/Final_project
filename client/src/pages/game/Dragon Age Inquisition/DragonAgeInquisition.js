import React from "react";
import "./DragonAgeInquisition.css";

const DragonAgeInquisition = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Dragon Age Inquisition</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/jJqxfkgSUog"
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
            src={require("../../../games/Dragon Age Inquisition/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age Inquisition/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age Inquisition/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age Inquisition/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            Become the Inquisitor: Wield the power of the Inquisition over the
            course of an epic character-driven story, and lead a perilous
            journey of discovery through the Dragon Age. Bond with Legends: A
            cast of unique, memorable characters will develop dynamic
            relationships both with you and with each other. Discover the Dragon
            Age: Freely explore a diverse, visually stunning, and immersive
            living world. Change the World Your actions and choices will shape a
            multitude of story outcomes along with the tangible, physical
            aspects of the world itself.
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
          {`Minimum:

OS: Windows 7 or 8.1, 64-bit
Processor (AMD): Quad core @ 2.5 GHz
Processor (Intel): Quad core @ 2.0 GHz
Memory: 4 GB
Graphics Card (AMD): Radeon HD 4870
Graphics Card (NVIDIA): GeForce 8800 GT
Graphics Memory: 512 MB
Hard Drive: 26 GB
DirectX: 10
Internet: 512 kbps up and down

Recommended:

OS: Windows 7 or 8.1, 64-bit
Processor (AMD): Six core @ 3.2 GHz
Processor (Intel): Quad core @ 3.0 GHz
Memory: 8 GB
Graphics Card (AMD): Radeon HD 7870 or R9 270
Graphics Card (NVIDIA): GeForce GTX 660
Graphics Memory: 2 GB
Hard Drive: 26 GB
DirectX: 11
Internet: 1 Mbps up and down`}
        </pre>
      </div>
    </div>
  );
};

export default DragonAgeInquisition;
