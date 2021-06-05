import React from "react";
import Navbar from "../Navbar/Navbar";
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import ServiceMain from "./ServiceMain/ServiceMain";
import "./Services.css";

const Services = () => {
  return (
    <div className="service">
      <Navbar />
      <ServiceHeader />
      <ServiceMain />
    </div>
  );
};

export default Services;
