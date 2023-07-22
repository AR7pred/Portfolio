import './AboutContentStyles.css'

import React from 'react'
import {Link} from "react-router-dom"
import  ar7 from "../assets/AR7.jpg"
import logo from "../assets/logoar.jpg"


const AboutContent = () => {
  return (
    <div className='about'>
     <div className='left'>
      <h1>Who Am I?</h1>
      <p>What's up, folks? I'm Aditya Raj, your go-to React Developer, and trust me when I say I'm on a whole new level with the MERN stack.<br/><br/> Fitness isn't just my passion; it's my way of life, and I proudly train others to embrace the journey with me. A programmer with a love for football, standing tall at 6 feet and aspiring to match Cristiano Ronaldo's hard work and dedication.<br/><br/> Currently, I'm putting my skills to incredible use with the Blood Bank website, bridging technology and compassion to save lives. Admittedly, I'm a slow learner, but that won't stop me from achieving greatness and exploring endless possibilities. Let's rock this adventure together! 🚀 </p>
      <Link to="/contact">
      <button className='btn'>CONTACT</button></Link>
     </div>

     <div className='right'>
     <div
     className='img-container'>
      <div className='img-stack top'>
           <img src={ar7} className='img' alt='AR7'/>
      </div>
      <div className='img-stack bottom'>
         <img src={logo} className='img' alt='AR7 icon'/>
      </div>
     </div>
     </div>
    </div>
  )
}

export default AboutContent
