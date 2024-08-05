import React from 'react'
import CartWidget from './CartWidget'
import logoImprebooks from '../assets/logoImprebooks.png'
import { Link } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
    return (
      <nav className="MainNavBar">
        <div className="contentMainNavBar">
          <div className='contentNavBar'>

             {/* //Contenedor logo */}
            <div className='contentLogo'>
              <img className='logoPrincipalNavBAr' src="https://i.postimg.cc/26qN621f/nuevo-logo-fondo-rosado-2.png" alt="Logo_Imprebooks" />
            </div>
          
          {/* //Contenedor Navegacion */}
            <div className='contentLinks'>
              <Link className='links' to='/inicio'>Inicio</Link>
              <Link className='links' to='/productos/'>Productos</Link>
              <Link className='links' to='/contacto'>Contacto</Link>
              <Link className='links' to='/nosotros'>Nosotros</Link>

            </div>
            
            {/* //Contenedor estado de compra */}
            <div className='contentPuchaseStatus'>  
              <CartWidget />
              <CartWidget/>
            </div>

          </div>
        </div>
      </nav>
    );
  }



  // export const NavBar = () => {
  //   return (
  //     <nav className="">
  //       <div className="">
  //         <a className="" href="#">
  //           <img src={logoImprebooks}  alt="Logo" width="150" height="150" className="d-inline-block align-text-top" />
            
  //         </a>
  //         <a className='imprebooks'>Imprebooks</a>
  //         <Link to='/contacto'>contacto</Link>
  //         <Link to='/productos'>producto</Link>
  //        <CartWidget/>   
  //       </div>
  //     </nav>
  //   );
  // }
