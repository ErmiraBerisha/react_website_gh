import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Slider from '../components/Slider';



const Things = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="THINGS YOU CAN DO VISITING OUR CITY" text="Spending time in Rahovec"/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Things