import "./HeroImageStyles.css";
import React from 'react'
// import bg1 from '../assets/bg1.jpg'
// import bg2 from '../assets/bg2.jpg'
// import hero3 from '../assets/hero3.jpg'
import bg3 from '../assets/bg3.jpg'
import right1 from '../assets/right1.jpg'
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className=" hero ">
        <div className="left">
        <div className="banner">
            <img className="hero-img" src={bg3} alt="img" />
        </div>
        <div className="contant">
                <p> Hi I am Saad Khalid</p>
                <h1> MERN Developer </h1>
                <div>
                    <Link to="/Project" className="btn">
                        Projects
                    </Link>
                    <Link to="/Contact" className="btn btn-light">
                        Contact
                    </Link>
                </div>

            </div>
            </div>
            <div className="right">
                <img  className="side-img" src={right1} alt="img" />
                <a href="https://drive.google.com/file/d/1t2NUgQ4GHI1qF_d8FHDXzWAFZZfHi10y/view?usp=sharing" className="btn">
                    Download CV/Resume
                    </a>
            </div>
      
    </div>
  )
}

export default HeroImage
