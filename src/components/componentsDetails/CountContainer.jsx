import React, {  useState } from 'react';
import { ItemCount } from './ItemCount';
import { Button } from '../componentsSecundarios/Button';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
export const CountContainer = ({producto}) => {
    const [count, setCount] = useState(1);
    const [showActions, setShowActions] = useState(false); 
    const { addCart,formatPrice } = useCart();
    const manejadorcantidadValor = (newCount) => {
        setCount(newCount);
      };
      const navigate = useNavigate();
    
      
    
      const añadir = () => {
        if (count <= producto.stock || count>0) {
          addCart({ ...producto, quantity: count });
    
          // Mostrar botones adicionales si la cantidad es igual al stock
          if (count === producto.stock) {
            setShowActions(true);
          }
        } else {
          console.error("La cantidad solicitada excede el stock disponible.");
          }
        setShowActions(true)
      };
    return (
<>
  <div className='contentDetailItemPrice'>
    <p className='DetailItemPrice'>Valor: {formatPrice(producto.price)} CLP</p>
    <p className='DetailItemPrice'>Total: {formatPrice(producto.price * count)} CLP</p>
  </div>
  
  <div className='DetailItemCount'>
    {showActions ? (
      <div className='AdditionalActions'>
        <Link to={`/pagar`}><Button contenido="Ir a pagar"/></Link>
        
       <Link to={ `/productos `}> <Button contenido="Seguir mirando" /></Link>
      </div>
    ) : (
              <>

              
                  {(producto.stock != 0)
                   ?(   <div className='DetailItemAdd addToCar'>          
                          <p className='parrafoCantidad'>Cantidad</p>
                          <ItemCount cantidadValor={manejadorcantidadValor} cantidad={count} stock={producto.stock} />
                          <Button contenido="Añadir al carrito" funcion={añadir} />
                        </div>)
                    :( <span className='sinStock desactivado'>Sin Stock</span>)
                  }
                 
                
       
      </>
    )}
  </div>
  

</>
  )
}


