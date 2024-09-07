import React, { useState, useEffect } from 'react';
import { Button } from '../componentsSecundarios/Button';

export const ItemCount = ({ cantidadValor, stock, resetCount }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    cantidadValor(count);
    if (resetCount) {
      setCount(0); // Resetea el contador si se recibe la señal de reset
    }
  }, [count, cantidadValor,resetCount]);


  const restar = () => {
    if (count >1) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className='contentItemCount'>
      <div className='btnminContentItemCount'>
        {(count > 1)
          ? (<Button contenido="-" funcion={restar} />)
          : (<></>)
        }
      </div>
     
      <p className='ValorContentItemCount'>{count}</p>
      
      <div className='btnmaxContentItemCount'>
        {(count < stock)
          ? (<Button contenido="+" funcion={sumar} />)
          : (<span className='snStock'>Stock Máx.</span> )
        }
      </div>
    </div>
  );
};
