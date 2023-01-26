import React from "react";
import Button from "./Button";
import botanik from "../assets/botanik.png";
import botanikbac from "../assets/botanikbac.png";



function Showcase(){
    return (
      <>
        <div className="container">
          <div className="flex">
            <div className="one">
              <h1>Recruit top talented freelancer for your business</h1>
              <p className="showcase-p">
                Connect you to thoudsands of talented freelancer from any
                industry. You can have the best people in just few simple steps.
              </p>
              <Button />
            </div>
            <div className="two">
              <img src={botanik} alt="rasm" className="botanik" />
              <img src={botanikbac} alt="rasm" className="botanikbac" />
            </div>
          </div>
        </div>
      </>
    );
}

export default Showcase;