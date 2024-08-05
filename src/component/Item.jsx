import { useState } from 'react';
import React from 'react'
import { ItemCount } from './ItemCount'
import { Button } from './Button';
import ItemDetailContainer from './ItemDetailContainer';
import { Link } from 'react-router-dom'
export const Item = ({ producto }) => {
  // Verificar si producto está definido
  if (!producto) {
    return <p>Error: Producto no definido</p>;
  }
  const [isVisible, setVisible] = useState(false)
  const mostrarDetalles = (id) => {
    setVisible(true)

  }

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
  };
  const añadir = () => {
    
  };
  return (
    <div className='containerCardItems'>
      <div className='containerCardItemsS'>
        <div className='contentCardItems'>
        <Link to={ `/detalles/${producto.id} `}>  <img className='imageItem' src={producto.image} alt={producto.title} />   </Link>
          
        </div>

        <div className='descriptionCardItems'> 

        
          <p className='descriptionPLeft'>{producto.title}</p>
          <p>{ producto.category}</p>
         
        <p className='descriptionPRight'>{formatPrice(producto.price)}</p>
        
        </div>
        

      {
          
      }

        </div>
    </div>
  )
}

   
      