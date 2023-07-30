import React, {  useState } from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import Product from './Components/Product/Product'
import Catagories from './Components/Catagories/Catagories'
import About from './Components/About/About'
import Brands from './Components/Brands/Brands'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Checkout from './Components/Checkout/Checkout'
import Orders from './Components/Orders/Orders'
import NotFound from './Components/NotFound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import { CartContextProvider } from './Context/CartContext'
import { Toaster } from 'react-hot-toast';
 import { Offline } from "react-detect-offline";

const App = () => {
 let Token = localStorage.getItem('userToken')
 let [userData,setuserData]=useState(null)
 function saveUserData(){
  let encodedToken = localStorage.getItem('userToken')
  let decodedToken = jwtDecode(encodedToken)
  setuserData(decodedToken)
 }
  let router = createBrowserRouter([
    {path:'' ,element:<Layout   setuserData={setuserData} userData={userData} />,children:[
      {index:true,element:    <ProtectedRoute> <Home/> </ProtectedRoute>},
      {path:'Catagories',element: <ProtectedRoute> <Catagories/> </ProtectedRoute> },
      {path:'Product',element:  <ProtectedRoute>  <Product/> </ProtectedRoute> },
      {path:'Cart',element:  <ProtectedRoute>  <Cart/> </ProtectedRoute> },
      {path:'Brands',element:<ProtectedRoute>  <Brands/> </ProtectedRoute> },
      {path:'Checkout',element:<ProtectedRoute>  <Checkout/> </ProtectedRoute> },
      {path:'About',element: <ProtectedRoute>  <About/> </ProtectedRoute> },
      {path:'allorders',element: <ProtectedRoute>  <Orders/> </ProtectedRoute> },
      {path:'Login',element:<Login saveUserData={saveUserData}/>},
      {path:'Register',element:<Register/>},
      {path:'products/:id',element:<ProductDetails />},
      {path:'*',element:<NotFound/>}
    ]}
  ])
  return (
    <>
     <CartContextProvider> 
        {Token?<div className='network border-none '>
        <Offline>You're offline right now. Check your connection.</Offline>
         </div>:null}
   
     <Toaster/>
    <RouterProvider router={router}></RouterProvider> 
     </CartContextProvider> 
    </>
  )
}
export default App