import './FooterStyles.css'

import React from 'react'
import { FaEnvelope, FaGithub, FaHome, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-cotainer'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color : "#fff", marginRight : "2rem"}}/>
                    <div>
                        <p>Lahore</p>
                        <p>Pakiatan</p>
                    </div>
                </div>
                <div className='Phone'>
                   <a href='https://wa.me/message/ROOY35VS357IH1'> <h4><FaPhone size={20} style={{color : "#fff", marginRight : "2rem"}} />
                    +92-344-8493940</h4></a>
                </div>
                <div className='Email'>
                  <a href='mailto:saadali4378@gmail.com'>  <h4><FaEnvelope size={20} style={{color : "#fff", marginRight : "2rem"}} />
                    saadali4378@gmail.com</h4> </a>
                    </div>
                 </div>
            <div className='right'>
                <h4>
                    About the Compeny 
                </h4>
                <p>
                    This is Saad Khalid. I am a MERN Stack Developer
                </p>
                <div className='Social-icons'>
                 <a href='https://github.com/Saadkhalid4378' >   <FaGithub  size={30} style={{color : "#fff", marginRight: "1rem"}}/> </a>
                   <a href='https://www.linkedin.com/in/saad-khalid-2bb6b1223/'> <FaLinkedin size={30} style={{color : "#fff", marginRight: "1rem"}}/> </a>
                   <a href='https://wa.me/message/ROOY35VS357IH1'> <FaWhatsapp size={30} style={{color : "#fff", marginRight: "1rem"}}/> </a>

                </div>
                 </div>
        </div>
      
    </div>
  )
}

export default Footer
