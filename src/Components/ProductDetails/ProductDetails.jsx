import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'
import { CartContext } from '../../Context/CartContext'
import { toast } from 'react-hot-toast'

const ProductDetails = () => {
  let {addtocart,setnumOfCartItems}  = useContext(CartContext)
  async function addProduct(productId) {
    let response= await  addtocart(productId) ;
    setnumOfCartItems(response.data.numOfCartItems)

    if(response?.data?.status==='success'){
       toast.success(response.data.message,{duration: 2000} )
    }
    else
    {
      toast.error("error",{duration: 2000})
    }
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   let url = 'https://route-ecommerce.onrender.com/api/v1/products'
  const Params = useParams()
  const [loading, setloading] = useState(false) 
  const [product, setproductsDetials] = useState({}) 
  async function getProducts() {  
    setloading(true)
    const {data}=await axios.get(`${url}/${Params.id}`)
    setproductsDetials(data.data)
    setloading(false)

  }
    useEffect(()=>{
      getProducts()
    },[])
    return(
      <> 
      {loading?  <div className='text-center mt-2 pb-4 mb-4  '> <i className='fas fa-spin fa-spinner fa-2x text-main  '></i></div>:
      <>
      <div className='container'>
   <div className='mt-2  row align-items-center'>
      <div className="col-md-4 mb-4">
      <Slider {...settings} >
        {product?.images?.map((image)=>
           <   img className='w-100' src={image} alt="" />
        )}
     </Slider>
     </div>
      <div className="col-md-8" >
      <h1  className='mb-4  text-center'> {product?.description} </h1>
      <h1 className='h6  fW-bold    text-center'  > {product?.title} </h1>
      
       <div >
       <div className="d-flex justify-content-between">
         <span className='text-muted'>  {product?.price} EGP </span> 
       <span> 
          <i className='fas fa-star rating-color'>   </i> 
          {product?.ratingsAverage}
        </span>
      </div>
         <button  onClick={()=>addProduct(product._id)} className='btn bg-main w-100 text-white mt-1 cursor-pointer mb-5'>+ Add to cart</button>

      </div>
      </div>
   </div>
     </div>
    
      </>
      }
 
      </>
   
   
  
    )
  
}

export default ProductDetails ;