import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = (props) => {

  if (localStorage.getItem('userToken')==null) 
  {
      return <Navigate to={'/Login'}/>
  } else
  {
     return   props.children ;
    
  }
  
}

export default ProtectedRoute ;