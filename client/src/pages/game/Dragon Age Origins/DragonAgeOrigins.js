import React from "react";
import "./DragonAgeOrigins.css";

const DragonAgeOrigins = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Dragon Age Origins</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/GoEol-5Epfg"
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
            src={require("../../../games/Dragon Age/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            When history tells the story of the Fifth Blight, what will be said
            about the hero who turned the tide against the darkspawn? Determine
            your legacy and fight for Thedas as a noble dwarf, an elf far from
            home, a mage apprentice, or a customized hero of your own design.
            Experience many unique origin stories on your quest to unite the
            kingdoms and defeat an ancient evil.
          </p>
        </div>
        <div className="price-card">
          <h4 className="price">R349.95</h4>
          <a className="waves-effect waves-light btn payment-btn" href="!#">
            <i className="material-icons left">shopping_cart</i>Purchase
          </a>
        </div>
      </div>
      <div className="game-requirements">
        <pre>
          {`Minimum Requirements:
OS: Windows 7
CPU: Intel Core 2 SINGLE 1.6 Ghz Processor or equivalent
RAM: 1 GB (1.5 GB  and Windows 7)
DISC DRIVE: DVD Rom drive required for packaged media
HARD DRIVE: 20 GB HD space
VIDEO: ATI Radeon X850 256MB or greater
SOUND: Direct X Compatible Sound Card

Recommended Specs:
OS: Windows 7
CPU: Intel Core 2 Duo 2.4 Ghz Processor or equivalent
RAM: 2 GB (3 GB and Windows 7)
DISC DRIVE: DVD Rom drive required for packaged media
HARD DRIVE: 20 GB HD space
VIDEO: ATI 3850 512MB or greater / NVIDIA 8800GTS 512MB or greater
SOUND: Direct X Compatible Sound Card`}
        </pre>
      </div>
    </div>
  );
};

export default DragonAgeOrigins;
