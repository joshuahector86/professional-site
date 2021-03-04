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
            lot of computer and science things. About me: I am pretty happy with
            the current progress of my academic and professional careers. I have
            completed a multitude of projects and have gained an immense amount
            of experience when it comes to research in the technical fields.
            This page talks about my past experiences and what I have done, but
            it also touches on what I learned and how I felt during each
            experience. Like anyone else, I have had my share of trying times
            while working, but all of those experiences are what have made me
            the person I am today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
