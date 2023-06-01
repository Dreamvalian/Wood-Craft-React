import React from "react";
import { FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo/logo-color-w-text.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-container">
        <img src={Logo} alt="Logo" width="128" height="72" />
        <p>&copy; 2023 Woodcraft. All rights reserved.</p>
      </div>
      <div className="right-container">
        <ul>
          Resource
          <li>
            <a href="/#" className="footer-item">
              Wood
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              Glammor
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              Quality
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              Crafting
            </a>
          </li>
        </ul>
        <ul>
          About Us
          <li>
            <a href="/#" className="footer-item">
              Our Story
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              Out Location
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              News
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              Career
            </a>
          </li>
        </ul>
        <ul>
          Contact Us
          <li>
            <a href="/#" className="footer-item">
              {FaInstagram} Instagram
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              {FaInstagram} Facebook
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              {FaInstagram} Twitter
            </a>
          </li>
          <li>
            <a href="/#" className="footer-item">
              {FaInstagram} Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
