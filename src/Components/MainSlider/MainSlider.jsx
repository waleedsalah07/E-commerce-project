import React from 'react'
import Slider from "react-slick";
import imag_1 from "../../images/slider-image-3.jpeg"
import imag_2 from "../../images/slider-image-2.jpeg"
import imag_3 from "../../images/slider-image-1.jpeg"
import imag_4 from "../../images/slider-2.jpeg"
import imag_5 from "../../images/blog-img-1.jpeg"
import imag_6 from "../../images/blog-img-2.jpeg"
import imag_7 from "../../images/grocery-banner.png"
import imag_8 from "../../images/grocery-banner-2.jpeg"
const MainSlider = () => {
  var  settings = {
    dots: true,
    infinite: true,
    autoplay: true,
     autoplaySpeed: 5000,
     speed: 5000,
     cssEase: "linear" ,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className='container d-none d-md-block'>
      <Slider  {...settings}>
        <div>
         <img   className='w-100'   height={400}  src={imag_1} alt="" />
        </div>
        <div>
        <img  className='w-100' height={400} src={imag_2}   alt="" />
        </div>
        <div>
        <img  className='w-100'  height={400} src={imag_3}   alt="" />
        </div>
        <div>
        <img  className='w-100'  height={400} src={imag_4}   alt="" />
        </div>
        <div>
        <img  className='w-100'  height={400} src={imag_5}   alt="" />
        </div>
        <div>
        <img  className='w-100'  height={400} src={imag_6}   alt="" /> 
        </div>
        <div>
        <img  className='w-100'  height={400} src={imag_7}   alt="" /> 
        </div>
        <div>
        <img  className='w-100'  height={400} src={imag_8}   alt="" /> 
        </div>
      </Slider>
      <h3 className='text-black'> Shop Popular catagories</h3>    

    </div>
  );
}

  


export default MainSlider


