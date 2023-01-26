import React from "react";
import dasturchiopa from "../assets/dasturchiopa.png"; 


function Section5(){
    return (
      <section className="container dev">
        <img src={dasturchiopa} alt="rasm" className="dasturchi" />
        <div className="malumot">
          <span className="section5-span">WHAT ARE YOU WAITING FOR?</span>
          <h3 className="section5-h3">
            Find the talent to get your business growing
          </h3>
          <button className="section5-btn">Get Started</button>
        </div>
      </section>
    );
}
export default Section5;