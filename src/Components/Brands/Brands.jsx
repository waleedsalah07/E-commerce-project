import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Footer from '../Footer/Footer'

const Brands = () => {
  let [brands,setBrands]=useState(null)
  let [loading,setLoading] =useState(false)
  async  function  getBrands() {
    setLoading(true)
    let {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
    setBrands(data?.data);
    setLoading(false)

  }
  useEffect(()=>{
    getBrands()
  },[])
  return (

    <div className="row  ">
  <Helmet>
  <title> Our Brands</title> 
 </Helmet>
      {loading?<div className='text-center mt-4 '> <i className='fas fa-spin fa-spinner fa-2x text-main mt-1  '></i></div>:
      <>
      <div className='container'>
        <div className="row">
        { brands?.map((brand)=> <div   className='col-md-3' key={brand._id} >
        <div className='Brand cursor-pointer px-3'>
          <img src={brand.image} alt="" />
        </div>
      </div>  )}
        </div>
    
      </div>
      <Footer/>

      </>}
    </div>
  )
}
export default Brands