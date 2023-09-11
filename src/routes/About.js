import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import AboutContant from '../components/AboutContant'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading='About' text='I am a Front-End Develper.'/>
      <AboutContant/>
      <Footer/>
    </div>
  )
}

export default About
