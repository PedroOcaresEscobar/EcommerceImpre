
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
export const Item = ({ producto }) => {
  const { formatPrice } = useCart();
  if (!producto) {
    return <p>Error: Producto no definido</p>;
  }



  const añadir = () => {
    
  };
  return (
    <div className='containerCardItems'>
      <div className='containerCardItemsS'>
        <div className='contentCardItems'>
        <Link to={ `/detalles/${producto.id} `}>  <img className='imageItem' src={producto.image} alt={producto.title} />   </Link>
          
        </div>

        <div className='descriptionCardItems'> 

          <div>
          <p className='descriptionPLeft'>{producto.title}</p>
          <p className='descriptionPLeft subT' >{ producto.category}</p>
         </div>

         
        <p className='descriptionPRight'>{formatPrice(producto.price)}</p>
        
        </div>
        </div>
    </div>
  )
}

   
      