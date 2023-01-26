import React from "react";

import logo1 from "../assets/ayirbac.png";
import logo2 from "../assets/google.svg";
import logo3 from "../assets/slack.png";
import logo4 from "../assets/slack.png";
import logo5 from "../assets/amazon.svg";

function Section1(){
    return(
      <div className="container flexx">
       <img src={logo1} alt="logo" />
       <img src={logo2} alt="logo" />
       <img src={logo3} alt="logo" />
       <img src={logo4} alt="logo" />
       <img src={logo5} alt="logo" />
      </div>
    );
}

export default Section1;