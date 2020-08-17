import React from "react";
import "./Battlefield4.css";

const Battlefield4 = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Battlefield 4</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/sclTMEd7JN8"
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
            src={require("../../../games/Battlefield 4/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield 4/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield 4/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield 4/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            Battlefield 4 puts you in the boots of US Marine Sgt. Daniel Recker,
            member of the Tombstone squad. Against the backdrop of a global
            conflict between US, Russia and China, you'll engage in combat on
            foot and by operating land, sea and air units. Thankfully, you're
            not alone in your struggles on the Battlefield. The bonds with your
            teammates will grow stronger as you face perils of every kind. Don't
            let your squad down; they're counting on you as much as you need
            them to survive.
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
          {`Minimum System Requirements
OS: 32-bit
Processor (AMD): Athlon X2 2.8 GHz
Processor (Intel): Core 2 Duo 2.4 GHz
Memory: 4 GB
Hard Drive: 30 GB
Graphics card (AMD): AMD Radeon HD 3870
Graphics card (NVIDIA): Nvidia GeForce 8800 GT
Graphics memory: 512 MB

Recommended System Requirements
OS: Windows 8 64-bit
Processor (AMD): Six-core CPU
Processor (Intel): Quad-core CPU
Memory: 8 GB
Hard Drive: 30 GB
Graphics card (AMD): AMD Radeon HD 7870
Graphics card (Nvidia): NVIDIA GeForce GTX 660
Graphics memory: 3 GB`}
        </pre>
      </div>
    </div>
  );
};

export default Battlefield4;
