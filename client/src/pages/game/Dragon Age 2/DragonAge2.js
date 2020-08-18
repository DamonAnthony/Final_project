import React from "react";
import "./DragonAge2.css";

const DragonAge2 = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Dragon Age 2</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/Rh43mO4Huds"
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
            src={require("../../../games/Dragon Age 2/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age 2/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age 2/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Dragon Age 2/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            Dragon Age 2 thrusts players into the role of Hawke, a refugee who
            survives the destruction of his homeland and becomes the Champion of
            Kirkwall. The lore around Hawke's rise to power is shrouded in myth
            and rumor and is the driving force behind this all-new story
            spanning 10 years in the Dragon Age universe timeline. Players will
            uniquely experience how this legend unfolds by gathering the
            deadliest of allies, making tough moral choices, amassing fame and
            fortune, and sealing their place in history.
          </p>
        </div>
        <div className="price-card">
          <h4 className="price">R349.95</h4>
          <a
            className="waves-effect waves-light btn black payment-btn"
            href="/Payment"
          >
            <i className="material-icons left">shopping_cart</i>Purchase
          </a>
        </div>
      </div>
      <div className="game-requirements">
        <pre>
          {`PC MINIMUM
OS: with SP3, with SP2, or Windows 7
CPU: Intel Core 2 Duo (or equivalent) running at 1.8 GHz or greater
RAM: 1 GB (1.5 GB Vista and Windows 7)
Video: ATI Radeon HD 2600 Pro 256 MB; NVIDIA GeForce 7900 GS 256 MB cards
Hard Drive: 7 GB
Sound: Direct X 9.0c Compatible Sound Card Windows Experience Index: 4.5

PC RECOMMENDED
CPU: Intel Core 2 Quad 2.4 GHz Processor or equivalent
RAM: 2 GB (4 GB Vista and Windows 7)
Video: ATI 3850 512 MB or greater; NVIDIA 8800 GTS 512 MB or greater
DirectX 11 Video: ATI 5850 or greater; NVIDIA 460 or greater`}
        </pre>
      </div>
    </div>
  );
};

export default DragonAge2;
