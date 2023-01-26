import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";

function Header(){
    return (
      <>
        <header className="container">
          <div className="header">
            <img src={logo} alt="logo" />
            <ul className="ul">
              <li className="li">
                <a href="#">Home</a>
              </li>
              <li className="li">
                <a href="#">About us</a>
              </li>
              <li className="li">
                <a href="#">How it works</a>
              </li>
              <li className="li">
                <a href="#">For freelancer</a>
              </li>
              <Button />
            </ul>
          </div>
        </header>
      </>
    );
}
export default Header;