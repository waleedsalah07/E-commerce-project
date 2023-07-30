import React, {  useState } from 'react'
import styles from "./Register.module.css"
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Register = () => {
   let Navigate = useNavigate()
   let [loading,setloading] =useState(false)
   let [Erorrmessage,setErorrmessage] =useState('')
  async function handleRegister(values)
  {
    setloading(true);
    let {data} = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,values).catch((errr)=>{
      setloading(false);
    setErorrmessage(`${errr.response.data.errors.param}:${errr.response.data.errors.msg}`)
     console.log(errr);
  })
    if(data.message==='success'){
      setloading(false);
      Navigate('/login')
    }
   
  }
   let validation = yup.object({
    name : yup.string().required('name is requried').min(3,'name minlength is 3').max(10,'name maxlength is 10'),
    email :  yup.string().required('email is requried').email('email is invaild'),
    password : yup.string().required('password is requried').matches(/^[A-Z][a-z0-9]{5,10}$/,'Password must starts with uppercase'),
    rePassword:yup.string().required('repassword is requried').oneOf([yup.ref('password')],'repassword and password doesnt match'),
    phone : yup.string().required('phone is requried').matches(/^01[0125][0-9]{8}$/,'phone starts..... '  )
   })
  let formik = useFormik({ 
    initialValues :{
      name : '',
      email : '',
      password : '', 
      rePassword : '',
      phone : '' 
    },
    validationSchema:validation ,
    onSubmit:handleRegister
  })
  return (
    
    <div className="w-75 mx-auto py-4 ">
 <Helmet>
  <title> Register </title> 
 </Helmet>
      <h3 > Register now : </h3>
      {Erorrmessage.length>0?  <div className="alert alert-danger"> {Erorrmessage} </div> :null}
     
       <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange}   value={formik.values.name}    type="text"   name='name' id='name'/>
         {formik.errors.name && formik.touched.name? <div className='alert alert-danger'> {formik.errors.name} </div> :null}

        <label htmlFor="email">Email:</label>
        <input   onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange}   value={formik.values.email}    type="email"   name='email' id='email'/>
         {formik.errors.email && formik.touched.email? <div className='alert alert-danger'> {formik.errors.email} </div> :null}

        <label htmlFor="password">Password:</label>
        <input  onBlur={formik.handleBlur}  className='form-control mb-2' onChange={formik.handleChange}   value={formik.values.password}    type="password"   name='password' id='password'/>
        {formik.errors.password && formik.touched.password? <div className='alert alert-danger'> {formik.errors.password} </div> :null}

        <label htmlFor="rePassword">rePassword:</label>
        <input  onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange}   value={formik.values.rePassword}    type="password"   name='rePassword' id='rePassword'/>
        {formik.errors.rePassword && formik.touched.rePassword? <div className='alert alert-danger'> {formik.errors.rePassword} </div> :null}

        <label htmlFor="phone">phone:</label>
        <input   onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange}   value={formik.values.phone}    type="tel"   name='phone' id='phone'/>
        {formik.errors.phone && formik.touched.phone? <div className='alert alert-danger'> {formik.errors.phone} </div> :null}
        {loading?<button  type='button' className='btn bg-main text-white mt-2'><i className='fas fa-spinner fa-spin' ></i> </button>:        <button disabled ={!(formik.isValid&&formik.dirty)} type='submit' className='btn bg-main text-white mt-2'>Register </button>}
       </form>
    </div>

  )
  
  
}

export default Register