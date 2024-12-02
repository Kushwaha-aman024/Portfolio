import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import Form from '../Components/Form';


const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="CONTACT" text="Let's Connect!"/>
      <Form/>
      <Footer></Footer>
    </div>
  )
}

export default Contact