import './HeroImageStyles2.css';    
import React, { Component } from 'react'
import bg2 from '../assets/bg2.jpg'

class HeroImage2 extends Component {
  render ()  {
    return (
      <div className=" hero2 ">

        <div className='banner2'>
          <img  className='hero-img2' src={bg2} alt='img' />
        </div>

      <div className='headings'>
          <h1> {this.props.heading}</h1>
          <p>{this.props.text}</p>
      </div>
  </div>
    );
  }

};

export default HeroImage2
