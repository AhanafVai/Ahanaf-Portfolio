import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import ServiceMain from "./ServiceMain/ServiceMain";
import "./Services.css";

const Services = () => {
  return (
    <div className="service">
      <Helmet>
        <title>Services</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Ahanaf" />
        <meta
          name="description"
          content="A developer armed with a deep sense of responsibility and possessing very high levels of enthusiasm to give my 110% for any endeavor. Following are the services I provide."
        />
        <meta
          name="keywords"
          content="Design,Programmer, Codder, Frontend Development,React,Backend Development"
        />
        <meta />
        <link
          rel="canonical"
          href="/https://ahanafabdullah.netlify.app/service"
        />
      </Helmet>
      <Navbar />
      <ServiceHeader />
      <ServiceMain />
    </div>
  );
};

export default Services;
