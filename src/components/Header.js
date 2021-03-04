import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div id="home" className="main-info">
        <h1>The Dancing Developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Object-oriented Programming",
            "Simulation Work",
            "Researcher",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <Link smooth={true} to="contacts" href="#" className="btn-main-offer">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
