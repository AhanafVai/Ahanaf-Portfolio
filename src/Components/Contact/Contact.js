import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import ContactFooter from "./ContactFooter/ContactFooter";
import ContactMain from "./ContactMain/ContactMain";

const Contact = () => {
  return (
    <div className="contact_">
      <Helmet>
        <title>Contact</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Ahanaf" />
        <meta
          name="description"
          content="Welcome to my Portfolio. I'm a web developer based in Dhaka, Bangladesh."
        />
        <meta
          name="keywords"
          content="Programmer, Codder, Frontend,React,email,recruit"
        />
        <meta />
        <link
          rel="canonical"
          href="https://ahanafabdullah.netlify.app/contact"
        />
      </Helmet>
      <Navbar />
      <h1>Contact</h1>
      <p className="contact_p">Send me a message</p>
      <ContactMain />
      <ContactFooter />
    </div>
  );
};

export default Contact;
