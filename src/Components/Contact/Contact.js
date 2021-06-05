import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import ContactFooter from "./ContactFooter/ContactFooter";
import ContactMain from "./ContactMain/ContactMain";

const Contact = () => {
  return (
    <div className="contact_">
      <Navbar />
      <h1>Contact</h1>
      <p className="contact_p">Send me a message</p>
      <ContactMain />
      <ContactFooter />
    </div>
  );
};

export default Contact;
