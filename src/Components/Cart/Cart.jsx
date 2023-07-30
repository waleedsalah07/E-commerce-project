import React, { useContext, useEffect,useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../Footer/Footer'
const Cart = () => {
  const [CartDetials, setCartDetials] = useState(null)
  let {getlogedUserCart,RemoveItem,updataItem,RemoveCart,setnumOfCartItems,numOfCartItems}=useContext(CartContext)
  async  function getCart() {
   
   let response =  await  getlogedUserCart()
   setnumOfCartItems(response?.data?.numOfCartItems)
   if(response?.data?.status==='success'){
    setCartDetials(response.data.data);
   }
  }
  async  function removeProduct(productId) {
   let response =  await  RemoveItem(productId)
   setnumOfCartItems(response?.data?.numOfCartItems)
    toast.success('product removed',{duration: 2000} )
    setCartDetials(response.data.data);
  }
  async  function DeleteCart() {
   let response =  await  RemoveCart()
   setnumOfCartItems(response.data.numOfCartItems)
    toast.success('Cart removed',{duration: 2000} )
    setCartDetials(response.data.data);
  }
  async  function updateProduct(productId,count) {
   let response =  await  updataItem(productId,count)
   console.log(response);
   setnumOfCartItems(response?.data?.numOfCartItems)
    toast.success('product update successfully ',{duration: 2000} )
    setCartDetials(response.data.data);
  }
  useEffect(()=>{
    getCart()
  },[])
   
  return (
    <>
     <Helmet>
  <title> My Cart</title> 
 </Helmet>
       
 {CartDetials   ?  <>
 <div className="bg-main-light my-4 p-4  Empty container w-75">
<div>
<h3> Shop Cart :  </h3>
<h6 className='text-main'> Total Cart Price: {CartDetials.totalCartPrice} EGP </h6>
</div>
<div>
<button  onClick={(()=>DeleteCart())}  className='btn p-0 m-0' > <i className='fa-regular fa-trash-can text-main'></i>  Remove Cart </button>

</div>

{CartDetials.products.map((product)=>
<div key={product.product._id} className=' row align-items-center  border-bottom py-3'>
  <div className="col-md-1">
    <img  className='w-100'  src={product.product.imageCover} alt="" />
  </div>
  <div className="col-md-11 d-flex justify-content-between align-items-center">
    <div>
    <h6 className='h6 text-center'>  {product?.product?.title.split(' ').slice(0,2).join(' ')}  </h6>
     <h6 className='text-main'> price: {product.price} EGP </h6>
     <button className='btn p-0 m-0' onClick={ ()=> removeProduct(product.product._id)}> <i className='fa-regular fa-trash-can text-main'></i>  Remove </button>

    </div>
    <div>
      <button onClick={()=>updateProduct(product.product._id,product.count+1)} className='btn  btn-outline-success  btn-sm '> + </button>
      <span className='mx-1'> {product.count} </span>
      <button onClick={()=>updateProduct(product.product._id,product.count-1)} className='  btn  btn-outline-success  btn-sm '> - </button>
    </div>
    </div>
</div> )}
     { numOfCartItems !==0  ?<button className='btn bg-main  mt-3   '>
        <Link className='text-white' to={'/Checkout'}>
            Checkout
        </Link>
       </button>:null}
</div>

  
     <Footer/>

      </>

  : 
  <>
   <div className="bg-main-light  p-4 Empty container">
   {  CartDetials ===null && numOfCartItems>0? <h3 className='text-main'> Shop Cart is loading ! </h3>:null}

    {  CartDetials !==null || numOfCartItems===0 || numOfCartItems===undefined ? <h3 className='text-main'> Shop Cart is Empty ! </h3>:null} 
    </div> 
    <Footer/>
  </>

    }
    </>
    
  )
}
export default Cart