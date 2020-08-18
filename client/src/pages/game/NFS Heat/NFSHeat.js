import React from "react";
import "./NFSHeat.css";

const NFSHeat = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">NFS Heat</h1>
      <div className="game-trailer">
        <iframe
          title="trailer"
          className="trailer"
          width="1200"
          height="720"
          src="https://www.youtube.com/embed/9ewiJJe_nYI"
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
            src={require("../../../games/NFS Heat/Screenshots/S1.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/NFS Heat/Screenshots/S2.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/NFS Heat/Screenshots/S3.jpg")}
            alt="Screenshot"
          />
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot"
            src={require("../../../games/NFS Heat/Screenshots/S4.jpg")}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="description-cards">
        <div className="game-description">
          <h1 className="heading">Description</h1>
          <p>
            In Need for Speed Heat, the lines of the law fade when the sun
            starts to set. By daylight, compete in the Speedhunter Showdown, a
            series of sanctioned events where you can earn Bank to customize
            your personal fleet of cars. When your ride’s styled just right,
            ramp up the intensity at night. Enter illicit street races with your
            die-hard crew but stay ready – rogue cops are waiting. Take chances,
            burn competitors to increase your Rep, and risk it all for
            underground glory.
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
          {`MINIMUM REQUIREMENTS

OS: Windows 10
Processor (AMD): FX-6350 or Equivalent
Processor (Intel): Core i5-3570 or Equivalent
Memory: 8 GB
Graphics card (AMD): Radeon 7970/Radeon R9 280x or Equivalent
Graphics card (NVIDIA): GeForce GTX 760 or Equivalent
DirectX: 11 Compatible video card or equivalent
Online Connection Requirements: 320 KBPS or faster Internet connection
Hard-drive space: 50 GB

RECOMMENDED REQUIREMENTS

OS: Windows 10
Processor (AMD): Ryzen 3 1300X or Equivalent
Processor (Intel): Core i7-4790 or Equivalent
Memory: 16 GB
Graphics card (AMD): Radeon RX 480 or Equivalent
Graphics card (NVIDIA): GeForce GTX 1060 or Equivalent
DirectX: 11 Compatible video card or equivalent
Online Connection Requirements: 512 KBPS or faster Internet connection
Hard-drive space: 50 GB`}
        </pre>
      </div>
    </div>
  );
};

export default NFSHeat;
