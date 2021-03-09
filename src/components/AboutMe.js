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
            lot of computer and science and tech things. <br></br>
            <br></br>I am an energetic and passionate individual who is
            constantly in search of new challenges and fun to be had! I have
            experience in web development, research, object oriented
            programming, mathematics and more. Outside of my technical career I
            am a professional West Coast Swing dancer and full time tech/game
            nerd. Check out my page for details about my experience and feel
            free to reach out to me using the form at the bottom of the page.
            Thanks for stopping by!
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
