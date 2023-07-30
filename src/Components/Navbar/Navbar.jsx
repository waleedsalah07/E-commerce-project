import React, { useContext } from 'react'
import logo from "../../images/freshcart-logo.svg"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


const Navbar = ({logout}) => {
  let {numOfCartItems}=useContext(CartContext);
  console.log(numOfCartItems);
  let Token = localStorage.getItem('userToken')
  return <>
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <div className="container">
        <Link className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </Link>
        <button className="navbar-toggler outline d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          {Token !==null ? <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Catagories" >Catagories</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Product" >Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Brands" >Brands</Link>
            </li>
          </ul>
     :null}
     
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {Token!==null?<li className="nav-item d-flex align-items-center mt-2 d-none d-md-block">
            <i className='fab mx-1 fa-facebook'></i>
            <i className='fab mx-1 fa-twitter'></i>
            <i className='fab mx-1 fa-instagram'></i>
            <i className='fab mx-1 fa-tiktok'></i>
            <i className='fab mx-1 fa-linkedin'></i>
            <i className='fab mx-1 fa-youtube'></i>
          </li>:null}

          {Token===null?
          <>
             <li className="nav-item">
                <Link className="nav-link" to="Login">Login</Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="Register">Register</Link>
            </li>
          </>:
          <>
          <li>
          <Link className="nav-link  position-relative" to="Cart"> 
              <i className='fas fa-shopping-cart fa-lg'>  </i>
             <span className='badge bg-main  text-white position-absolute top-0 end-0'> {numOfCartItems===undefined?numOfCartItems=0:numOfCartItems} </span> 
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={logout}>Logout</Link>
            </li>
          </>
}
          </ul>
        </div>
      </div>
    </nav>

 
  </>
}

export default Navbar