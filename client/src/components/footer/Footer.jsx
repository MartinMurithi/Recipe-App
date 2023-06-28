import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerSocials">
        <p className="footerRight">
          Kocima
        </p>
        <div className="footerLeft">
          <FaFacebook className="socialIcon" id="faceBook" />
          <FaInstagram className="socialIcon" id="ig" />
          <FaTwitter className="socialIcon" id="twitter" />
          <a
            href="https://github.com/MartinMurithi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="socialIcon" id="gitHub" />
          </a>
        </div>
      </div>

      <div className="footerLinks">
        <div className="footerSectionOne">
          <NavLink to="/contacts" className="footerItem">
            Presentations
          </NavLink>
          <NavLink to="/contacts" className="footerItem">
            Professionals
          </NavLink>
          <NavLink to="/contacts" className="footerItem">
            Stores
          </NavLink>
        </div>
        <div className="footerSectionTwo">
          <NavLink to="/contacts" className="footerItem">
            Workshops
          </NavLink>
          <NavLink to="/contacts" className="footerItem">
            Local Meetups
          </NavLink>
          <NavLink to="/contacts" className="footerItem">
            Our initiatives
          </NavLink>
        </div>
        <div className="footerSectionThree">
          <NavLink to="/contacts" className="footerItem">
            Webinars
          </NavLink>
          <NavLink to="/contacts" className="footerItem">
            Giving Back
          </NavLink>
          <NavLink to="/contacts" className="footerItem">
            Contact Form
          </NavLink>
        </div>
        <div className="footerSectionFour">
          <NavLink to="/contacts" className="footerItem">
            Work With Us
          </NavLink>
          <NavLink to="/contacts" className="footerItem">
            Visit
          </NavLink>
        </div>
      </div>

      <p className="authorName">
        Made by
        <a
          href="https://github.com/MartinMurithi"
          target="_blank"
          rel="noreferrer"
          className="authorLink"
        >
          Martin Wachira
        </a>
      </p>
    </footer>
  );
}

export default Footer;
