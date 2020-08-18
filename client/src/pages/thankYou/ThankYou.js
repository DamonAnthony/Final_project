import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thanks-container">
      <h2 className="thanks-heading">Thank You For Your Purchase</h2>
      <div className="store-btn">
        <a
          href="/Store"
          className="waves-effect waves-light btn black white-text store-btn"
        >
          Browse Store
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
