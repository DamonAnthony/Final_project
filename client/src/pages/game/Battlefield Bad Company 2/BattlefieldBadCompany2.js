import React from "react";
import "./BattlefieldBadCompany2.css";

const BattlefieldBadCompany2 = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Battlefield Bad Company 2</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/gApu9Xa3dgw"
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
            src={require("../../../games/Battlefield Bad Company 2/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield Bad Company 2/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield Bad Company 2/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield Bad Company 2/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            In Battlefield: Bad Company 2, the Bad Company crew again find
            themselves in the heart of the action, where they must use every
            weapon and vehicle at their disposal to survive. The action unfolds
            with unprecedented intensity, introducing a level of fervor to
            vehicular warfare never before experienced in a modern warfare
            action game.
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
          {`SYSTEM REQUIREMENTS

Required: Internet connection required to install and play.

OS: / / Windows 7

Processor: Intel Core 2 or better / AMD 64 X2 or better

Memory: 1 GB for / 1.5 GB for and Windows 7

Hard Drive: At least 10 GB of free space

DVD-ROM: 8x Speed

Video Card: 256MB RAM with support for shader model 3*

Sound Card: Direct X 9.0c compatible

DirectX: Version 9.0c (included)

Online: 2 – 10 Players

Input: Keyboard, Mouse, VOIP headset

Supported video cards: Nvidia GeForce 6800 or better, ATI Radeon X1600 or better. Laptop versions of these chipsets may work but are not supported. Updates to your video and sound card drivers may be required.`}
        </pre>
      </div>
    </div>
  );
};

export default BattlefieldBadCompany2;
