import React from "react";
import "./Contactus.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us">Contact Us</h1>
      <div className="detail">
        <strong>Address: </strong> 24 Doppleganger str
      </div>
      <div className="detail">
        <strong>Email: </strong> BaconBits@gmail.com
        <div className="detail">
          <strong>Phone: </strong> 021 685 5224
        </div>
      </div>
      <div className="detail">
        <strong>Mon-Fri 9:00 AM-5:00 PM</strong>
      </div>
    </div>
  );
};

export default ContactUs;
