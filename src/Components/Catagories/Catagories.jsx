import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import Footer from './../Footer/Footer';

const Catagories = () => {
  let [Catagories,setCatagories]=useState(null)
  let [loading,setLoading] =useState(false)
  async  function  getBrands() {
    setLoading(true)
    let {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
    setCatagories(data?.data);
    setLoading(false)

  }
  useEffect(()=>{
    getBrands()
  },[])
  return (
 

    <div className="row ">
<Helmet>
  
  <title> Our Catagories</title> 
 </Helmet>


      {loading?<div className='text-center mt-4 '> <i className='fas fa-spin fa-spinner fa-2x text-main mt-1  '></i></div>:
      <>
       
       
       <div className='container '>
        <div className='row'>
        { Catagories?.map((Catagory)=> 
        <div className='col-md-4 ' key={Catagory._id} >
       <div className='my-1 cursor-pointer mt-2' key={Catagory._id}>
          <img  className='w-100'  height={200} src={Catagory.image}alt="" />
           <h4 className='h6 pt-2 text-center  text-black'> {Catagory.name}  </h4>
        </div>
      </div>  )}
        </div>

       </div>

      

      <Footer/>
      </>}
    </div>
  )
}
export default Catagories