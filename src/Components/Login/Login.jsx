import React, {  useState } from 'react'
import styles from "./Login.module.css"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Login = ({saveUserData}) => {
  
   let Navigate = useNavigate()
   let [loading,setloading] =useState(false)
   let [Erorrmessage,setErorrmessage] =useState('')

   function reload() {
    window.location.reload(true)
   }

  async function handleLogin(values)
  {
    setloading(true);
    let {data} = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values).catch((errr)=>{
      setloading(false);
    setErorrmessage(`${errr.response.data.errors.param}:${errr.response.data.errors.msg}`)
  })
    if(data.message==='success'){
      localStorage.setItem('userToken',data.token)
       saveUserData();
      setloading(false);
      Navigate('/')
      reload()
    }
  }
   let validation = Yup.object({
    email :  Yup.string().required('email is requried').email('email is invaild'),
    password : Yup.string().required('password is requried').matches(/^[A-Z][a-z0-9]{5,10}$/,'Password must starts with uppercase'),
   })
  let formik = useFormik({ 
    initialValues :{
      email : '',
      Password : '', 
    },
    validationSchema:validation ,
    onSubmit:handleLogin
  })
  return (
    <div className="w-75 mx-auto py-4 ">
 <Helmet>
  <title> Login</title> 
 </Helmet>
      <h3 > Login now : </h3>
      {Erorrmessage.length>0?  <div className="alert alert-danger"> {Erorrmessage} </div> :null}
     
       <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input   placeholder='Enter Email....'  onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange}   value={formik.values.email}    type="email"   name='email' id='email'/>
         {formik.errors.email && formik.touched.email? <div className='alert alert-danger'> {formik.errors.email} </div> :null}

        <label htmlFor="password">Password:</label>
        <input  placeholder='Enter Password....' onBlur={formik.handleBlur}   className='form-control mb-2' onChange={formik.handleChange}   value={formik.values.password}    type="password"   name='password' id='password'/>
        {formik.errors.password && formik.touched.password? <div className='alert alert-danger'> {formik.errors.password} </div> :null}

         {loading?<button  type='button' className='btn bg-main text-white mt-2'><i className='fas fa-spinner fa-spin' ></i> </button>:      
           <button disabled ={!(formik.isValid&&formik.dirty)} type='submit' className='btn bg-main text-white mt-2'>Login </button>}
       </form>
    </div>
  )
}
export default Login





