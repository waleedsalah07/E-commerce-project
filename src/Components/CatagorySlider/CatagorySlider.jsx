import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'

const CatagorySlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
     autoplaySpeed: 5000,
     cssEase: "linear" ,
    slidesToShow: 7,
    slidesToScroll: 4
  };

  const [categories, setcategories] = useState([]) 
   async function getcategories() {
  let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  setcategories(data.data)
  
}
  useEffect(()=>{
    getcategories()
  },[])
  return (

    <div className='container'>
  <Slider {...settings}>
     {categories.map((category)=>
        <div className='my-1 cursor-pointer mt-2' key={category._id}>
          <img  className='w-100'  height={160} src={category.image}alt="" />
           <h4 className='h6 pt-2 text-center d-none d-md-block'> {category.name}  </h4>
        </div> )}

     </Slider>


    </div>
  
  )
  
   
}

export default CatagorySlider