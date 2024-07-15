import React from 'react'
import CartWidget from './CartWidget'
import logoImprebooks from '../assets/logoImprebooks.png'

const NavBar = () => {
    return (
      <nav className="navbar bg-body-tertiary dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logoImprebooks}  alt="Logo" width="150" height="150" className="d-inline-block align-text-top" />
            
          </a>
        <a className='imprebooks'>Imprebooks</a>
         <CartWidget/>   
        </div>
      </nav>
    );
  }

export default NavBar
