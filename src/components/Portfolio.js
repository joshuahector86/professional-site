import React from "react";
import project1 from "../img-5.jpg";
import project2 from "../img-6.jpg";
import project3 from "../img-7.jpg";
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //First Project
  const openPopupboxFirst = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project3} alt="first" />
        <p>projects coming soon!</p>
        <b>Resume Site Link</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://www.joshuahector.com/")}
        >
          https://www.joshuahector.com/
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigFirst = {
    titleBar: {
      enable: true,
      text: "Project Name.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Second Project
  const openPopupboxSecond = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project1} alt="second" />
        <p>projects coming soon!</p>
        <b>Resume Site Link</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://www.joshuahector.com/")}
        >
          https://www.joshuahector.com/
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigSecond = {
    titleBar: {
      enable: true,
      text: "Project Name.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Third Project
  const openPopupboxThird = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project3} alt="third" />
        <p>projects coming soon!</p>
        <b>Resume Site Link</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://www.joshuahector.com/")}
        >
          https://www.joshuahector.com/
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigThird = {
    titleBar: {
      enable: true,
      text: "Project Name.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Fourth Project
  const openPopupboxFourth = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project2} alt="fourth" />
        <p>projects coming soon!</p>
        <b>Resume Site Link</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://www.joshuahector.com/")}
        >
          https://www.joshuahector.com/
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigFourth = {
    titleBar: {
      enable: true,
      text: "Project Name.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxFirst}>
            <img className="portfolio-image" src={project1} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}
          <div className="portfolio-image-box" onClick={openPopupboxSecond}>
            <img className="portfolio-image" src={project1} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}
          <div className="portfolio-image-box" onClick={openPopupboxThird}>
            <img className="portfolio-image" src={project1} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}
          <div className="portfolio-image-box" onClick={openPopupboxFourth}>
            <img className="portfolio-image" src={project1} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigFirst} />
      <PopupboxContainer {...popupboxConfigSecond} />
      <PopupboxContainer {...popupboxConfigThird} />
      <PopupboxContainer {...popupboxConfigFourth} />
    </div>
  );
};

export default Portfolio;
