import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";

import MainSection from "./MainSection/MainSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ahanaf Abdullah</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Ahanaf" />
        <meta
          name="description"
          content="Welcome to my Portfolio. I'm a web developer based in Dhaka, Bangladesh."
        />
        <meta name="keywords" content="Programmer, Codder, Frontend,React" />
        <meta />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
