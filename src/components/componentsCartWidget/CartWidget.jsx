import React, { useEffect, useRef, useState } from 'react'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CartWidgeEmpty } from './CartWidgeEmpty';
import { Button } from '../componentsSecundarios/Button';

export const CartWidget = () => {
  const [preVisible, setVisible] = useState(false);
  const { cart, productCount, addCart, removeFromCart, clearCart,
    getTotal, getGroupedCart, getCartItemCount,
    findProductCart, applyDiscount } = useCart();
      
  const [totalItems, setTotalItems] = useState(productCount)
  const [carritoAlargado, setCarritoAlargado] = useState(null)
  const refCartWidget = useRef(null);

  const mostrarCartWidget = () => {
    setVisible(prevVisible => {
      const newVisibleCartWidget = !prevVisible;
      return newVisibleCartWidget;
    })
         
  };
  
  useEffect(() => {
    setTotalItems(productCount)
    if (totalItems < 1) {
      setCarritoAlargado(false)
    } else {
      setCarritoAlargado(true)
    }
  }, [totalItems,productCount])
  
  return (
    <div className='containerBtnUsersShopping'>
      <div className='contentBtnUsersShopping'>
        <section className='carrito' onClick={mostrarCartWidget}>
          <img src="https://i.ibb.co/Dttzjkw/carrito.png" className='imgCarrito' />
          {carritoAlargado && (<span>{totalItems}</span>)}
        </section>
      </div>
      

      
      {preVisible && (carritoAlargado ? (
          <div className='containterModalCarro' ref={refCartWidget}>
            <div className='contentModalCarro'>
              <div className='btnCerrarDetail'><Button contenido="X" funcion={mostrarCartWidget} ></Button></div>
              <div className='containerCarriDetail'>
                <div className='contentCarrilDetail'>
                  <div className='contentCarrilDetailInteriorSaludo'>
                    <h3>Tu Carrito</h3>
                  </div>
                  <div className='contentCarrilDetailInteriorDetalle'>
                    <ul>
                      {getGroupedCart().map(item => (
                        <li key={item.id}>
                          <div className='detailAldetail'>
                            <div className='detailAldetailImagen'>
                              <img className='imgaldiutoi' src={item.image} alt="" />
                            </div>
                            <div className='detailAldetailDescription'>
                              <div>
                                <p className='itemDetailCarroTitulo'>{item.title}</p>
                                <p className='itemDetailCarroCategoria'>{item.category}</p>
                              </div>
                              <p> cantidad: {item.quantity} </p>
                            </div>
                            <div className='detailAldetailDescription Left'>
                              <span>{(item.price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} CLP</span>
                              <div className='eliminar'>
                                <Button contenido="Eliminar" funcion={() => { removeFromCart(item.id) }} />
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
             
              </div>
              <div className='contentCarrilDetailInteriorTotal'>
                <div className='detalleTotal'>
                  <p className='detalleTotalParrafoL'>Subtotal: </p>
                  <p className='detalleTotalParrafoR'>{(getTotal()).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} CLP</p>
                  <p className='detalleTotalParrafoComentario'>Envío e impuestos calculados al finalizar la compra.</p>
                  <Link to='/pagar'> <Button contenido="Pagar"></Button></Link>
                </div>
              
               
              </div>
            </div>
          </div>
        )
        : (<CartWidgeEmpty />) )}
    </div>
  )
}
    



