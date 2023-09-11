import React from 'react';
import Navbar from '../components/Navbar.js';
import HeroImage from '../components/HeroImage.js';
import Footer from '../components/Footer.js';
import Work from '../components/Work.js';



const Home = () => {
  return (

    <div>
     <Navbar/>
     <HeroImage />
     <Work/>
     <Footer/>
    </div>
  
  )
};

export default Home;
