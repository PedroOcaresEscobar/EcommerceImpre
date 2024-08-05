import React from 'react'

export const Button = ({texto,color,funcion}) => {


    console.log(texto,color,funcion)





  return (
      <button className='btn-Button'  onClick={funcion}> { texto }</button>
  )
}
