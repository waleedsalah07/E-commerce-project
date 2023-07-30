import React from 'react'
import styles from "./NotFound.module.css"
import imag from "../../images/error.svg"

const NotFound = () => {
  return (
    <div className='d-flex  align-items-center justify-content-center'>
           <img    src={imag} alt="" />

    </div>
  )
  
  
}

export default NotFound