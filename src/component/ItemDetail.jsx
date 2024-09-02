import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {  useCart } from '../context/CartContext'
import { ItemCount } from './ItemCount'
import { Button } from './Button';
const ItemDetail = ({producto}) => {
  const { id } = useParams();
    const {cart, addCart} = useCart()
    const [isVisibleLastID, setVisibleLastID] = useState(true);
    const [isVisible, setVisible] = useState(true);

  console.log(cart)
  

    const [count, setCount] = useState(0)
  
  
    if (parseInt(id) === 1) {
      setVisible  (false)
  } else {
    setVisible  (true)
    }
  if (parseInt(id) === 13) {
    setVisibleLastID(false)
  } else {
    setVisibleLastID(true)
  }
  
  const mostrarSiguiente = () => {
      
        setId(id + 1)
      }
      const mostrarAnterior = () => {
        setId(id - 1)
      }

      const handleAddToCart = (count) =>{
        const prodConCantidad = {...producto, quantity: count}
        addCart(prodConCantidad)
      }
      const cerrarModalDetail = () => {
        navigate("/productos");
      };
  
  
      const manejadorcantidadValor = (newCount) => {
        setCount(newCount);
      };
    
      const añadir = () => {
   
        addCart({ ...producto, quantity: count });
        
      };

      return (
        <div>
          <div className='containerDetailItem'>
            <div className='contentDetailItem'>
              <div className='cardDetailItem'>
                <div className='btnCerrarDetail'><Button contenido="X" funcion={cerrarModalDetail} ></Button></div>
                <div className='imgItemDetail'>
                  <img className='imageItemDetailItem' src={producto.image} alt={producto.title} />
                </div>
                <div className='DetailItem'>
                  <div className='containtDetailItemTitle'>
                    <p className='DetailItemTitle'>{producto.title}</p>
                    <p className='descriptionPLeft'>{producto.category}</p>
                  </div>
                  <div className='contentDetailItemPrice'>
                    <p className='DetailItemPrice'>Valor: {((producto.price))} CLP</p>
                    <p className='DetailItemPrice'>Total: {((producto.price*count))} CLP</p>
                  </div>
                  <div className='DetailItemCount'>
                    <p className='parrafoCantidad'>Cantidad</p>
                    <ItemCount cantidadValor={manejadorcantidadValor} id={id} />
    
                  </div>
                  <div className='DetailItemAdd addToCar'>
                    <Button contenido="Añadir al carrito" funcion={añadir} />
                  </div>
                </div>
              </div>
            </div>
            <div className='nextAndPreview'>
              <div>
              {
                isVisible && (
                
                     <Button contenido="Anterior" funcion={mostrarAnterior} />
                 
                 
               
                )
              }
              </div>
              <div>
              {
                isVisibleLastID && (
                 
                <Button contenido="Siguiente" funcion={mostrarSiguiente} />
          
                )
              }
    
              </div>
              
        
              
           
    
              
            </div>
          </div>
        </div>
      );
    }

export default ItemDetail
