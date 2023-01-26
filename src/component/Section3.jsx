import React from "react";

import shablon from "../assets/shablon.png";

function Section3 (){
    return (
      <section className="container section3 flex">
        <img src={shablon} alt="rasm" />
        <div className="section3-div">
          <h2 className="section3-h2">Wakanda is an easy platform to find talent</h2>
          <ul className="section3-ul">
            <li className="section3-li">Sign in to our website</li>
            <li className="section3-li">Fill out neccesary information</li>
            <li className="section3-li">Discover thoudsands of freelancers</li>
            <li className="section3-li">View freelancer’s profile and hire</li>
            <li className="section3-li">Complete payment & it’s time to work!</li>
          </ul>
        </div>
      </section>
    );
}
export default Section3;
