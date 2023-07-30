import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { toast } from 'react-hot-toast'
import Footer from '../Footer/Footer'

const FeaturedPro = () => {
const [products, setproductss] = useState([]) 
const [loading, setloading] = useState(false) 
let { addtocart ,setnumOfCartItems} = useContext(CartContext) ;

async function addProduct(productId) {
  let response = await  addtocart(productId) ;

  if(response?.data?.status==='success'){
    setnumOfCartItems(response.data.numOfCartItems)
     toast.success(response.data.message,{duration: 2000} )
  }
  else
  {
    toast.error("error",{duration: 2000})
  }
}
async function getProducts( ) {
  setloading(true)
  let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/products`)
  setproductss(data.data)
  setloading(false)
}
  useEffect(()=>{
    getProducts()
  },[])
  return(
<>

    {loading? <div className='text-center mt-4 '> <i className='fas fa-spin fa-spinner fa-2x text-main  '></i></div>:
     <>
     <div className='container'>
     <div className="row mb-4 pb-5"> 

      {products.map((product)=>
       <div key={product._id}  className="col-md-2">
      <div className="product  cursor-pointer px-2 py-4">
      <Link to={`/products/${product._id}`} > <img className='w-100' src={product?.imageCover} alt={product?.title} /></Link>
        <span className='text-main fW-bold font-sm  d-flex justify-content-center h6  '> {product?.category.name}  </span>
      <h3 className='h6     text-center'  > {product?.title.split(' ').slice(0,2).join(' ')} </h3>
       <div className="d-flex justify-content-between">
         <span className='text-muted'>  {product?.price} EGP </span> 
       <span> 
          <i className='fas fa-star rating-color'>   </i> 
          {product?.ratingsAverage}
        </span>

      </div>
      <button onClick={()=>addProduct(product._id)}  className='btn bg-main w-100 text-white mt-1'>+ Add</button> 

      </div>
     </div> )}
     </div>

     </div>
     <Footer/>

    </> }
 

</>

  )
}

export default FeaturedPro