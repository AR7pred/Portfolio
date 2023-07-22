import './FooterStyles.css'

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
      <div className='left'> 
       <div className='location'>
         <FaHome size={20} style={
            {color:"#fff" , marginRight: "2rem"}} /> 
            <p>Sector-11/D,
           B.S.City,
           Jharkhand , INDIA</p>
       </div>
       <div className='phone'>
          <h4>
          <FaPhone size={20} style={  
            {color:"#fff" , marginRight: "2rem"}}/>
            6205303551
          </h4>
       </div>

       <div className='email'>
          <h4>
          <FaMailBulk size={20} style={  
            {color:"#fff" , marginRight: "2rem"}}/>
            9852140933aditya@gamil.com
          </h4>
       </div>
    
      </div>
      <div className='right'>
      <h4> About Me</h4>
      <p>Greetings! I'm Aditya Raj, a passionate 3rd-year student at BIT Mesra, Ranchi. I relish the joy of learning, savoring each moment to grasp new knowledge at my own pace. Embracing growth and discovery with every step on this enlightening journey.
        Open To Work.
      </p>
      <div className='social'>
        <FaFacebook size={30} style={  
            {color:"#fff" , marginRight: "2rem"}}/>
        <FaTwitter size={30} style={  
            {color:"#fff" , marginRight: "2rem"}}/>
        <FaLinkedin size={30} style={  
            {color:"#fff" , marginRight: "2rem"}}/>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
