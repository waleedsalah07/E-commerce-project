import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useEffect } from 'react'
import { useState } from 'react'

const Orders = () => {
  let{getAllOrders} = useContext(CartContext)
  const [orders, setorder] = useState([])

 async function getOrders() {
    let response = await getAllOrders()
    console.log(response?.data?.data);
    console.log(response?.data?.cartItems);
    setorder(response?.data?.data)
  }

  useEffect(()=>{
    getOrders()
  },[])
  return(
    <>
    <div className='detials'>
   
    </div>
  {orders.map((order)=>
  <div key={order._id} className="row align-items-center  border-bottom py-3">
    <div className='col-md-6'>
    <img  className='w-100'  src={order?.brand?.product?.image} alt="" />
  
    <h1> {order.paymentMethodType}</h1>
    <h1> {order?.title}</h1>
    </div>

  </div> )}

    
    </>



  )

}

export default Orders