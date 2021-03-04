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
            Lorem ipsum dolor sit its all goodamet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Massa sed elementum tempus egestas sed sed risus pretium quam.
            Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
            Volutpat sed cras ornare arcu dui vivamus arcu. Urna cursus eget
            nunc scelerisque viverra. Nulla pellentesque dignissim enim sit
            amet. Arcu odio ut sem nulla pharetra diam sit amet. Sem fringilla
            ut morbi tincidunt augue interdum. Dictum fusce ut placerat orci.
            Euismod lacinia at quis risus. Enim ut tellus elementum sagittis
            vitaen iaculis nunc sed. Pellentesque elit ullamcorper dignissim
            cras tincidunt lobortis. Semauris vitae ultricies. M duis tristique.
            Sit amet consectetur adipiscing elit. Facilisis magna etiam tempor
            orci eu. Lectus magna fringilla urna porttitor rhoncus dolor purus
            non enim. Senectus et netus et malesuada. Nibh praesent tristique
            magna sit amet purus gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
