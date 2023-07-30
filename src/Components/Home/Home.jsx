import React from 'react'
import FeaturedPro from '../FeaturedProducts/FeaturedPro'
import CatagorySlider from '../CatagorySlider/CatagorySlider'
import {Helmet} from "react-helmet";
import MainSlider from '../MainSlider/MainSlider';

const Home = () => {
  return (

    <> 
  <Helmet>
  
    <title> Our products</title> 
   </Helmet>
    <MainSlider/>
    <CatagorySlider/>
     <FeaturedPro/>
     </>
  )

  
  
  
  

  
}

export default Home