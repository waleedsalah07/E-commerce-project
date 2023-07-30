import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { CartContext } from '../../Context/CartContext'
const Checkout = () => {
let {onlinePayment }= useContext(CartContext)
 async function handleSubmit(values) {
  let response =  await onlinePayment(values)
  if (response?.data?.status==='success') {
    window.location.href=response.data.session.url;
  }
  }
  let formik = useFormik({
    initialValues: {
       details:'',
       city:'',
       phone:'',
    },
    onSubmit:handleSubmit
  })
  return(
      <div className='w-75 py-5 mx-auto'>
        <form onSubmit={formik.handleSubmit}>
         <label htmlFor="details"> Details : </label>
         <input type="text"  placeholder='Enter Details....' className='form-control mb-3' onChange={formik.handleChange} value={formik.values.details} name='details' id='details ' />
        
         <label htmlFor="city"> City : </label>
         <input type="city"  placeholder='Enter your city....' className='form-control mb-3' onChange={formik.handleChange} value={formik.values.city} name='city' id='city' />
         
         <label htmlFor="phone"> Phone : </label>
         <input type="tel"  placeholder='Enter your Phone....' className='form-control mb-3' onChange={formik.handleChange} value={formik.values.phone} name='phone' id='phone' />
          <button type='submit'   className='btn bg-main w-100 text-white'> pay </button>
        </form>
      </div>

  )
  
  
  
}

export default Checkout