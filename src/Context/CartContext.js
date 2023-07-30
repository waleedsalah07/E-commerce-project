import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext=  createContext();
 export  function CartContextProvider(props) {

   const [loading, setloading] = useState(false)
   const [numOfCartItems, setnumOfCartItems] = useState(0)
   const[Id,setId]=useState(null)
 async function getCart() {
   setloading(false)
   let response = await getlogedUserCart() ;
   setloading(true)
   setnumOfCartItems(response?.data?.numOfCartItems )
   setId(response?.data?.data._id);
}
   useEffect(()=>{
      getCart()
   },[])
    let headers ={
        token : localStorage.getItem('userToken')
    }
    
    function addtocart(x) {
       return axios.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
        {
            //body
          productId:x
        },
        {
            //configurtion object
           headers:headers 
        }).then((response)=>response)
        .catch((error) => error) ;

    }
    function getlogedUserCart () {
        return axios.get(`https://route-ecommerce.onrender.com/api/v1/cart`,
         {
             //configurtion object
            headers:headers
         }).then((response)=>response)
         
         .catch((error) => error) ;
     }
     function RemoveItem(productId) {
        return axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
         {
          //configurtion object
            headers:headers
         }).then((response)=>response)
         .catch((error) => error) ;
     }
     function RemoveCart() {
        return axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart`,
         {
            headers:headers
         }).then((response)=>response)
         .catch((error) => error) ;
     }
     
     function updataItem(productId,count) {
        return axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
         {
            count:count
         },
         {
          //configurtion object
            headers:headers
         }).then((response)=>response)
         .catch((error) => error) ;
     }
     function onlinePayment(ShippingAddress) {
        return axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/Checkout-session/${Id}?url=http://localhost:3000`,
         {
            ShippingAddress:ShippingAddress
         },
         {
          //configurtion object
            headers:headers
         }).then((response)=>response)
         .catch((error) => error) ;
     }
     function getAllOrders() {
     return axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/`)
     .then((response)=>response)
     .catch((error)=>error)
      
     }
  
 


     return(
        <CartContext.Provider value={{loading,getCart,setnumOfCartItems,numOfCartItems,addtocart,getlogedUserCart,RemoveItem,updataItem,RemoveCart,onlinePayment,getAllOrders}}>
            {props.children}
        </CartContext.Provider>
    )
 }