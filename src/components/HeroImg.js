import './HeroImgStyles.css'

import React from 'react'

import IntroImg from "../assets/intro-bg4.avif";
import {Link} from 'react-router-dom';


const HeroImg = () => {
  return (
    <div className='hero'>
     <div className='mask'> 
       <img className='intro-img'
        src={IntroImg} alt='Desk' />
     </div>
     <div className='content'>
        <p>Hi , I'M A  UG <p>Student Athelete. </p> </p>
        <h1>React Developer .</h1>
        <div>
           <Link to='/project' 
           className='btn'>PACKAGES</Link> 
            <Link to='/contact' 
           className='btn btn-light'>Contact</Link>
        </div>
     </div>
    </div>
  )
}

export default HeroImg
