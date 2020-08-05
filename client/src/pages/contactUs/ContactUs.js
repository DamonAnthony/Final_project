import React from "react";
import "./Contactus.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-heading">Contact Us</h1>
      <div className="details">
        <div className="detail">
          <strong>Address: </strong> 24 Doppleganger str
        </div>
        <div className="detail">
          <strong>Email: </strong> baconbits@gmail.com
        </div>
        <div className="detail">
          <strong>Phone: </strong> 021 685 5224
        </div>
        <div className="detail">
          <strong>Office Hours:</strong> Mon-Fri 9:00 AM-5:00 PM
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
