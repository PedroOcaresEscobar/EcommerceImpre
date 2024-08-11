import React, { useEffect, useState } from 'react'
import { Button } from './Button'

export const ItemCount = ({cantidadValor}) => {
  const stock = 10
  const [count, setCount] = useState(1)
 
  useEffect(() => {
    console.log ("opa flaitingo")
  }, [])
  
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
      cantidadValor(count - 1);

    }
  };
  
  const sumar = () => {
    if (count <  stock ) {
      setCount(count + 1);
      cantidadValor(count + 1);
    }
    
}
  
  return (
    <div className='contentItemCount'>
      <div className='btnminContentItemCount'>
       <Button texto="-" funcion={restar} />
      </div>
     
      <p className='ValorContentItemCount'>{count}</p>
      
      <div className='btnmaxContentItemCount'  >
      <Button  texto="+" funcion={sumar}/>
      </div >
     

    </div>
  )
}

