import React  from 'react'
import Navbar from '../Navbar/Navbar'
import {  Outlet, useNavigate } from 'react-router-dom'
const Layout = ({userData,setuserData}) => {

  let Token = localStorage.getItem('userToken')
  let Navigate = useNavigate()
  function logout() {
    localStorage.removeItem('userToken')
    setuserData(null);
    Navigate('/Login')
    window.location.reload(true)
    if(Token===null){
      Navigate('/Login')
    }
  }
  



  
  return (
    <div  >
    <Navbar logout={logout}  userData={userData} />
    <div className=" mt-5 pt-4  ">
    <Outlet></Outlet>
    </div>
    </div>
    
  )
}

export default Layout


