import React from "react";
import bir from "../assets/bir.png"
import ikki from "../assets/ikki.png"
import uch from "../assets/uch.png"


function Section2(){
    return (
      <section className="container dragon">
        <div className="bosh">
          <span className="span">FEATURE</span>
          <h2 className="h2">The benefit of using our platform</h2>
        </div>
        <div className="flex">
          <div className="card">
            <img src={bir} alt="" className="section2-img" />
            <h3 className="section2-h3">Professional & Fast</h3>
            <p className="section2-p">
              Search and hire the most talented freelancers to match your needs.
              No matter what you need done, we've got the perfect freelancer for
              you.
            </p>
          </div>
          <div className="card">
            <img src={ikki} alt="" className="section2-img" />
            <h3 className="section2-h3">24/7 support</h3>
            <p className="section2-p">
              You have any concerns or questions? Don’t worry, we have our
              support team to help you at anytime and anywhere.
            </p>
          </div>
          <div className="card">
            <img src={uch} alt="" className="section2-img" />
            <h3 className="section2-h3">Safe & Secure</h3>
            <p className="section2-p">
              We know that safety is the most important thing for our customer,
              so all of our payments are processed instantly and securely.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Section2; 