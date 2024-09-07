import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../componentsSecundarios/Button';
import { CountContainer } from './CountContainer';

export const ItemDetail = ({ producto }) => {

  return (
     <div className='center'>
      <div className='containerDetailItem'>
        <div className='contentDetailItem'>
          <div className='cardDetailItem'>
            <div className='imgItemDetail'>
              <img className='imageItemDetailItem' src={producto.image} alt={producto.title} />
            </div>
            <div className='DetailItem'>
              <div className='containtDetailItemTitle'>
                <p className='DetailItemTitle'>{producto.title}</p>
                <p className='descriptionPLeft'>{producto.category}</p>
              </div>
              <CountContainer producto={producto } />
            </div>
          </div>
        </div>
      </div>
      <div className='containerBackToProduct'>
        <div className='backToProduct'>
          <Link to="/productos"><Button contenido="Volver a Productos"/></Link>
        </div>
      </div>
    </div>
  )
}

