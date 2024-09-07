import { useCart } from '../../context/CartContext';
import React, { useEffect } from 'react';
import { Button } from '../componentsSecundarios/Button';
import { Link } from 'react-router-dom';
import '../../styles/PayDetail.css'
export const Pagar = () => {
    const { setVCB, vCB,getGroupedCart, clearCart, removeFromCart,getTotal,formatPrice } = useCart();

    useEffect(() => {
        setVCB(false);
        return () => {
            setVCB(true);
        };
    }, [setVCB]);
   
    return (
        <>
             
        <div className='containerTitle'>
                <h1>🎁 Tu Carrito 🛒</h1>

               
                
        </div>
        <div className='ContainerCarritoPage'>
        <ul>
                      {getGroupedCart().map(item => (
                        <li key={item.id}>
                          <div className='detailAldetail'>
                            <div className='detailAldetailImagen'>
                                      <img className='imgaldiutoi' src={item.image} alt="" />
                                      <div className='detailAldetailDescription'>
                              <div>
                                <p className='itemDetailCarroTitulo'>{item.title}</p>
                                <p className='itemDetailCarroCategoria'>{item.category}</p>
                              </div>
                              <p> cantidad: {item.quantity} </p>
                            </div>
                            </div>
                           <div></div>
                            <div className='detailAldetailDescription Left'>
                              <span>{formatPrice(item.price)} CLP</span>
                              <div className='eliminar'>
                                <Button contenido="Eliminar" funcion={() => { removeFromCart(item.id) }} />
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
            </div>
            <div className='containerButtonsCheck'>
              <div className='BotonesPagar'>

                      <div className='btnVolver'>
                          <Link to='/productos'> <Button contenido={<><img className='basura' src="https://i.ibb.co/9TYBVPG/volver.png" alt="" /><p>seguir comprando</p></>}  /> </Link>
                        </div>

                      
                     
                      {(getTotal()==0) 
                      ?(<></>)
                      :(<>
                        <div className='btnPagar'>
                          <Link to='/pagar/checkout'><Button contenido={<><img className='basura' src="https://i.ibb.co/vsQMyZv/pagar.png" alt="" /><span>Total: {formatPrice(getTotal())}</span><p>Pagar</p></>}  /></Link>
                        </div>
                        
                        <div className='btnVaciar'>
                          <Button contenido={<><img className='basura' src="https://i.ibb.co/FgtLX2m/basura-rosa.png" alt="" /><p>Vaciar Carrito</p></>} funcion={clearCart} />
                        </div>

                      </>)
                      }
                      
                  </div>
          
        
            </div>
        </>
    );
};
