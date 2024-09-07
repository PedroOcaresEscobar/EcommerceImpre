import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/NavBar.css' 
import {CartWidget} from './componentsCartWidget/CartWidget';
import { useCart } from '../context/CartContext';
export const NavBar = () => {
  const { vCB } = useCart();

  return (
    <nav className="MainNavBar">
        <div className="contentMainNavBar">
          <div className='contentNavBar'>

             {/* //Contenedor logo */}
            <div className='contentLogo'>
              <img className='logoPrincipalNavBAr' src="https://i.postimg.cc/26qN621f/nuevo-logo-fondo-rosado-2.png" alt="Logo_Imprebooks" />
            </div>
          
            {/* //Contenedor Navegacion */}
            <div className='contentLinks desktop'>
              <Link className='links' to='/inicio'>Inicio</Link>
              <Link className='links' to='/productos/'>Productos</Link>
              <Link className='links' to='/contacto'>Contacto</Link>
              <Link className='links' to='/nosotros'>Nosotros</Link>
          </div>
          <div className='contentLinks ' id='movile'>
                <img className='basura' src='https://i.ibb.co/Ph9mxQ4/hamburfueza.png'/>
            </div>
            
            {/* //Contenedor carrito de compra */}
          <div className='contentPuchaseStatus'>
            {(vCB)
              ?(<CartWidget/>)
              :(<></>)
            }
              
            </div>

          </div>
        </div>
      </nav>
  )
}

