import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="ABOUT" text="I'm a Passionate  MERN Stack Developer"/>
      <AboutContent/>
      <Footer></Footer>
    </div>
  );
};

export default About;