import { Link } from "react-router-dom";
import "./AboutContantStyles.css";
import React from "react";
// import work4 from '../assets/work4.jpg'
// import work5 from '../assets/work5.jpg'

const AboutContant = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I</h1>
        <p>
          I am a react front-end Developer. I cerat responsive web site designs.
        </p>
        <Link to="/Contact" className=" btn">
          <btn>Contact</btn>
        </Link>
      </div>
      {/* <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img  src={work4} className="img" alt="top" />

            </div>
            <div className="img-stack bottom">
                <img  src={work5} className="img" alt="top" />

            </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutContant;
