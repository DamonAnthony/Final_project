import React from "react";
import "./Battlefield3.css";

const Battlefield3 = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Battlefield 3</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/9DM7NsxOS0Q"
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
            src={require("../../../games/Battlefield 3/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/Battlefield 3/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            Battlefield 3 leaps ahead of the competition with the power of
            Frostbite™ 2, the next installment of DICE’s cutting-edge game
            engine. This state-of-the-art technology is the foundation on which
            Battlefield 3 is built, delivering superior visual quality, a grand
            sense of scale, massive destruction, dynamic audio and incredibly
            lifelike character animations. As bullets whiz by, walls crumble,
            and explosions throw you to the ground, the battlefield feels more
            alive and interactive than ever before. In Battlefield 3, players
            step into the role of the elite U.S. Marines where they will
            experience heart-pounding single player missions and competitive
            multiplayer actions ranging across diverse locations from around the
            globe including Paris, Tehran and New York.
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
          {`Minimum System Requirements
OS: Windows 7 64-bit
Processor: 2 GHz Dual Core (Core 2 Duo 2.4 GHz or Althon X2 2.7 GHz)
Memory: 2 GB
Hard Drive: 20 GB
Graphics card (AMD): DirectX 10.1 compatible with 512 MB RAM 
Graphics card (NVIDIA): DirectX 10.0 compatible with 512 MB RAM 
Sound card: DirectX Compatible
Keyboard and Mouse

Recommended System Requirements
OS: Windows 7 64-bit
Processor: Quad-core CPU
Memory: 4 GB
Hard Drive: 20 GB
Graphics Card: DirectX 11 compatible with 1024 MB RAM 
Sound Card: DirectX Compatible
Keyboard and Mouse`}
        </pre>
      </div>
    </div>
  );
};

export default Battlefield3;
