import React, { useState } from 'react'

export const ButtonModalView = ({icono,name}) => {
    const [isVisible, setVisible] = useState(false) // 
    const mostrarDetalles = () => {
        setVisible(prevIsVisible => !prevIsVisible);
    };
  return (
      <div>
        <button className='carrito' onClick={mostrarDetalles}>
            <img src={icono} className='imgCarrito'/>
          </button>
          {isVisible && (
              <div>
          
              </div>
              
                
                 
           )
           


          }


      </div>


  )
}


