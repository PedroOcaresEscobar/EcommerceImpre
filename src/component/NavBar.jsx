import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import CartWidget from './CartWidget';

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
              <CartWidget/>
       
              {/* <ButtonModalView /> */}
             
            </div>

          </div>
        </div>
      </nav>
  )
}

