import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex"></div>
            <p>Thanks for visting my site!</p>
            <div className="d-flex">
              <br></br>
              <br></br>
              <p>Feel free to fill out the text form to reach me.</p>
            </div>
            <div className="d-flex"></div>
            <p>I swear it actually works and I will get a message from you!</p>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="" className="footer-nav">
                  About Me
                </a>
                <br />
                <a href="" className="footer-nav">
                  Skills
                </a>
                <br />
              </div>
              <div className="col">
                <a href="" className="footer-nav">
                  Experience
                </a>
                <br />
                <a href="" className="footer-nav">
                  Portfolio
                </a>
                <br />
                <a href="" className="footer-nav">
                  Contacts
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.joshuahector.com/"}
                quote={"Resume Site"}
                hashtag="#FullStack"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.joshuahector.com/"}
                quote={"Resume Site"}
                hashtag="#FullStack"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.joshuahector.com/"}
                quote={"Resume Site"}
                hashtag="#FullStack"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.joshuahector.com/"}
                quote={"Resume Site"}
                hashtag="#FullStack"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright &copy;
              {new Date().getFullYear()}&nbsp; Joshua Hector | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
