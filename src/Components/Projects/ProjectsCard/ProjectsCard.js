import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = () => {
  return (
    <div className="band d-flex row justify-content-center mx-auto container">
      <div className="col-md-4 item">
        <div className="project_card">
          <div className="thumb card-1"></div>
          <article>
            <h1>House-mark</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/Housemark"
                target="_blank"
                className="icon-link me-1"
                rel="noreferrer"
              >
                Client
              </a>
            </p>
            <p>An one stop place for all your housing solutions.</p>
            <div>
              <a
                href="https://housemark.vercel.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
                rel="noreferrer"
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
            <h1>Github Profiles</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/github-profiles"
                target="_blank"
                className="icon-link me-1"
                rel="noreferrer"
              >
                Client
              </a>
            </p>
            <p>
              Github Profiles is a React app to search GitHub profiles and see
              profile details.
            </p>
            <div>
              <a
                href="https://github-profiles-amber-delta.vercel.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
                rel="noreferrer"
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
            <h1>NetHub</h1>
            <p>
              Source COde:
              <a
                href="https://github.com/AhanafVai/NETHUB"
                target="_blank"
                className="icon-link me-1"
                rel="noreferrer"
              >
                Client
              </a>
            </p>
            <p>
              A Movie search app to keep the movie lovers updated with all the
              movie news
            </p>
            <div>
              <a
                href="https://net-hub.netlify.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
                rel="noreferrer"
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
            <h1>Recipe Book</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/recipe-book"
                target="_blank"
                className="icon-link me-1"
                rel="noreferrer"
              >
                Client
              </a>
            </p>
            <p>Less booking more cooking</p>
            <div>
              <a
                href="https://recipe-book-mu.vercel.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
                rel="noreferrer"
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
            <h1>Vite jobs</h1>
            <p>
              Source COde: {""}
              <a
                href="https://github.com/AhanafVai/Vite-jobs"
                target="_blank"
                className="icon-link me-1"
                rel="noreferrer"
              >
                Client
              </a>
            </p>
            <p>
              This is a solution to the Job listings with filtering challenge on
              Frontend Mentor.
            </p>
            <div>
              <a
                href="https://vite-jobs.vercel.app"
                target="_blank"
                class="btn-project btn-project--with-icon"
                rel="noreferrer"
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
            rel="noreferrer"
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
