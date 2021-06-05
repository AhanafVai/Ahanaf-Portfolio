import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = () => {
  return (
    <div className="band d-flex row justify-content-center mx-auto container">
      <div className="col-md-4 item">
        <div className="project_card">
          <div className="thumb card-1"></div>
          <article>
            <h1>Swift Delivery</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/swift-Delivery-Client"
                target="_blank"
                className="icon-link me-1"
              >
                Client
              </a>
              |
              <a
                href="https://github.com/AhanafVai/Swift-Delivery-Server"
                target="_blank"
                className="icon-link ms-1"
              >
                Server
              </a>
            </p>
            <p>
              An delivery service app which manages all the customers and
              companies needs.
            </p>
            <div>
              <a
                href="https://swift-delivery.netlify.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
              >
                Live Preview
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* card 2 */}
      <div className="col-md-4 item">
        <div className="project_card">
          <div className="thumb card-2"></div>
          <article>
            <h1>Premium Product Store</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/Premium-Store-Client"
                target="_blank"
                className="icon-link me-1"
              >
                Client
              </a>
              |
              <a
                href="https://github.com/AhanafVai/Premium-Store-Server"
                target="_blank"
                className="icon-link ms-1"
              >
                Server
              </a>
            </p>
            <p>An e-commerce webapp built on MERN stack environment.</p>
            <div>
              <a
                href="https://nervous-gates-f659a5.netlify.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
              >
                Live Preview
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* card 3 */}
      <div className="col-md-4 item">
        <div className="project_card">
          <div className="thumb card-3"></div>
          <article>
            <h1>Movie Max</h1>
            <p>
              <a
                href="https://github.com/AhanafVai/Movie-Max"
                target="_blank"
                className="icon-link me-1"
              >
                Source COde:
              </a>
            </p>
            <p>
              A Movie search app to keep the movie lovers updated with all the
              movie news
            </p>
            <div>
              <a
                href="https://movie-max.netlify.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
              >
                Live Preview
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* card 4 */}
      <div className="col-md-4 item">
        <div className="project_card">
          <div className="thumb card-4"></div>
          <article>
            <h1>Premium Product Store</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/ema-john-client"
                target="_blank"
                className="icon-link me-1"
              >
                Client
              </a>
              |
              <a
                href="https://github.com/AhanafVai/ema-john-server"
                target="_blank"
                className="icon-link ms-1"
              >
                Server
              </a>
            </p>
            <p>An e-commerce webapp built on MERN stack environment.</p>
            <div>
              <a
                href="https://confident-archimedes-b89534.netlify.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
              >
                Live Preview
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* card 5 */}
      <div className="col-md-4 item">
        <div className="project_card">
          <div className="thumb card-5"></div>
          <article>
            <h1>Premium Product Store</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/Bloggerly-client"
                target="_blank"
                className="icon-link me-1"
              >
                Client
              </a>
              |
              <a
                href="https://github.com/AhanafVai/Bloggerly-Server"
                target="_blank"
                className="icon-link ms-1"
              >
                Server
              </a>
            </p>
            <p>
              A blogSite for tech geeks. Built in MERN stack and team
              collaboration
            </p>
            <div>
              <a
                href="https://bloggerly.netlify.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
              >
                Live Preview
              </a>
            </div>
          </article>
        </div>
      </div>
      <footer>
        <p className="text-center ">
          Checkout my {""}
          <a
            className="btn-project text-decoration-none"
            href="https://github.com/AhanafVai"
            target="_blank"
          >
            GitHub
          </a>
          {""} Profile
        </p>
      </footer>
    </div>
  );
};

export default ProjectsCard;
