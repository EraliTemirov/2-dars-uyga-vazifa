import React from "react";
import logo from "../assets/logo.svg";
import instagram from "../assets/instagram.png";
import internet from "../assets/internet.png";
import twetter from "../assets/twetter.png";
import yutube from "../assets/yutube.png";

function Footer(){
    return (
      <footer>
        <div className="container flexy ">
          <div className="fle">
            <div className="flex footer-logo">
              <img src={logo} alt="logo" className="logo-footer" />
              <h3 className="footer-h3 logo-footer">Wakanda</h3>
            </div>
            <div className="flex imgs">
              <img src={instagram} alt="rasm" />
              <img src={internet} alt="rasm" />
              <img src={twetter} alt="rasm" />
              <img src={yutube} alt="rasm" />
            </div>
            <a href="#" className="footer-a">
              Copyright © 2022 Wakanda. All rights reserved
            </a>
          </div>

          <ul className="footer-ul">
            <li className="footer-li">Company</li>
            <li className="footer-li">About us</li>
            <li className="footer-li">Blog</li>
            <li className="footer-li">How it works</li>
            <li className="footer-li">For frelancer</li>
          </ul>
          <ul className="footer-ul">
            <li className="footer-li">Help center</li>
            <li className="footer-li">Tems of service</li>
            <li className="footer-li">Legal</li>
            <li className="footer-li">Prevace policy</li>
            <li className="footer-li">Status</li>
          </ul>
          <div className="songi">
            <h4 className="footer-h4">Subscribe to our newsletter</h4>
            <button className="footer-btn">Your email address</button>
          </div>
        </div>
      </footer>
    );
} 
export default Footer;