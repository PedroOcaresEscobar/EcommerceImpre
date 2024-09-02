import React, { useState } from 'react'
import '../styles/Button.css'

export const Button = ({ contenido, funcion }) => {
  const contenidoop = useState(contenido)
  return (
      <button className='btn' onClick={funcion}>{contenidoop}</button>
  )
}

