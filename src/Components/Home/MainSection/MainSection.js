import React from "react";
import Profile from "../../../Images/Ahanaf linkedIn.jpg";
import Resume from "../../../Images/Ahanaf Resume.pdf";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="home-main-bg d-flex row mx-auto">
      <div className="profile-pic col-md-5 ">
        <h1 className="home-main-h1 ">Ahanaf Abdullah</h1>

        <div className="d-flex row">
          <img className="pt-5 img-fluid " src={Profile} alt="Ahanaf" />
          <p className="home-main-p ">
            follow me <small>LI GH IG</small>{" "}
          </p>
        </div>
      </div>
      <div className="home-main-about col-md-5 col-sm-5 ">
        <h3 className="pb-2">Frontend | Backend | Full Stack</h3>
        <p>
          Welcome to my Portfolio. I'm a web developer based in Dhaka,
          Bangladesh.
        </p>
        <p>
          During the day time I build projects which inspires me and during the
          evening I work on enhancing my knowledge and programming skill. This
          is my way of programming.
        </p>

        <a
          className="home-main-btn"
          href={Resume}
          download
          target="_blank"
          type="button"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default MainSection;
