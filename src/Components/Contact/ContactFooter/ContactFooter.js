import React from "react";
import { Link } from "react-router-dom";
import "./ContactFooter.css";

const ContactFooter = () => {
  return (
    <div className="footer_ contact_para d-flex row mx-auto">
      <div className="col-md-3 col-6">
        <Link className="text-decoration-none" to="/home">
          {" "}
          <p>Home</p>{" "}
        </Link>

        <Link className="text-decoration-none">
          <p>Services</p>
        </Link>
        <Link className="text-decoration-none">
          {" "}
          <p>Projects</p>
        </Link>
        <Link className="text-decoration-none">
          {" "}
          <p>Blogs</p>
        </Link>
        <Link className="text-decoration-none">
          {" "}
          <p>Privacy</p>
        </Link>
      </div>
      <div className="col-md-3 col-4">
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Instagram</p>
      </div>
      <div className="col-md-5 col-sm-1">
        <p>ahanafabdullah9@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactFooter;
