import React from "react";
import headshot from "../img-me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="containerpy-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={headshot} alt="headshot..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">ABout Me</h1>
          <p className="aboutp">
            Welcome to my site! My preferred name is Dimitri Hector and I do a
            lot of computer and science things. <br></br>
            <br></br>About me: I am pretty happy with the current progress of my
            academic and professional careers. I have completed a multitude of
            projects and have gained an immense amount of experience when it
            comes to research in the technical fields.
            <br></br>
            <br></br>
            Check out my resume site that gives insight about the personal
            aspects of my journey!{" "}
            <a
              className="hyper-link"
              onClick={() => window.open("https://www.joshuahector.com/")}
            >
              My Resume Site
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
