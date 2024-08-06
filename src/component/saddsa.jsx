import React from 'react'
import carrito from '../assets/carrito.png'

const CartWidget = () => {
  return (
    <button className='carrito'>
      <img src={carrito} className='imgCarrito'/>
    </button>
  )
}

export default CartWidget
