import React from "react";
import "./ServiceMain.css";
import Design from "../../../Images/web-design.png";
import Frontend from "../../../Images/frontend.png";
import Backend from "../../../Images/backend.png";

const ServiceMain = () => {
  return (
    <div className="d-flex row justify-content-center mx-auto service-title">
      <div className="card col-md-3 ">
        <img className="service-icons mx-auto" src={Design} alt="" />
        <div className="card-body">
          <h2 className="pb-4">Design</h2>
          <p>
            I value simple content structure, clean responsive design patterns,
            and thoughtful interactions.
          </p>
          <h4>Things I enjoy designing</h4>
          <p>UX, UI, Web, Apps</p>
          <h4>Design Tools</h4>
          <ul className="design-list">
            <li>Figma</li>
            <li>Pen & Pencil</li>
            <li>Wireframe</li>
            <li>Sketch</li>
          </ul>
        </div>
      </div>

      <div className="card col-md-3 ">
        <img className="service-icons mx-auto" src={Frontend} alt="" />
        <div className="card-body">
          <h2 className="pb-4">Frontend Development</h2>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h4>Languages I speak</h4>
          <p>HTML, CSS, Sass, JavaScript, React</p>
          <h4>Frontend Dev Tools</h4>
          <ul className="design-list">
            <li>React-Redux</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Context APi</li>
            <li>Firebase</li>
            <li>GitHub</li>
            <li>React-testing-library</li>
            <li>Chrome developer tool</li>
          </ul>
        </div>
      </div>

      <div className="card col-md-3">
        <img className="service-icons mx-auto" src={Backend} alt="" />
        <div className="card-body">
          <h2 className="pb-4">Backend Development</h2>
          <p>
            A Day in my life may consist of fixing bugs, integrating APIs,
            Creating APIs, Data-structuring, Manage $ maintain server-side.
          </p>
          <h4>Languages I speak</h4>
          <p>Node, Express</p>
          <h4>Backend Dev Tools</h4>
          <ul className="design-list">
            <li>Mongo DB</li>
            <li>Stack Overflow</li>
            <li>Trello, Jira</li>
            <li>Rest APIs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
