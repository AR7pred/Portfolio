import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="I have made this portfolio using HTML,CSS,
       Javascript and React JS."/>
       <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
 