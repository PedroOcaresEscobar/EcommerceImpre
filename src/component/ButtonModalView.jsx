import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useCart } from './CartContex';

export const ButtonModalView = () => {
  const [prevIsVisibleCarro, setVisibleCarro] = useState(false);
  const [prevIsVisibleLogin, setVisibleLogin] = useState(false);

  const { cart, getTotal, removeFromCart } = useCart();

  const modalRefCarro = useRef(null);
  const modalRefLogin = useRef(null);

  const mostrarDetallesCarro = () => {
    setVisibleCarro(prevIsVisibleCarro => {
      const newCarroVisible = !prevIsVisibleCarro;
      if (newCarroVisible) {
        setVisibleLogin(false);
      }
      return newCarroVisible;
    });
  };

  const mostrarDetallesLogin = () => {
    setVisibleLogin(prevIsVisibleLogin => {
      const newLoginVisible = !prevIsVisibleLogin;
      if (newLoginVisible) {
        setVisibleCarro(false);
      }
      return newLoginVisible;
    });
  };

  const quitar = (itemId) => {
    removeFromCart(itemId);
  };

  // Función para manejar clics fuera del modal
  const handleClickOutside = (event, modalRef, setVisible) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setVisible(false);
    }
  };

  // Manejar clics fuera del modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (prevIsVisibleCarro) {
        handleClickOutside(event, modalRefCarro, setVisibleCarro);
      }
      if (prevIsVisibleLogin) {
        handleClickOutside(event, modalRefLogin, setVisibleLogin);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [prevIsVisibleCarro, prevIsVisibleLogin]);

  // Agrupa los productos por ID y suma las cantidades
  const groupedCart = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += item.quantity;
    } else {
      acc[item.id] = { ...item };
    }
    return acc;
  }, {});

  const groupedCartArray = Object.values(groupedCart);

  return (
    <div className='containerBtnUsersShopping'>
      <div className='contentBtnUsersShopping'>
        <button className='carrito' onClick={mostrarDetallesCarro}>
          <img src="https://i.ibb.co/Dttzjkw/carrito.png" className='imgCarrito' />
        </button>
        <button className='carrito' onClick={mostrarDetallesLogin}>
          <img src="https://i.ibb.co/3hWdcXj/icono-login.png" className='imgCarrito' />
        </button>
      </div>

      {prevIsVisibleCarro && (
        <div className='containterModalCarro' ref={modalRefCarro}>
          <div className='contentModalCarro'>
            <div className='btnCerrarDetail'>
              <Button texto="X" funcion={mostrarDetallesCarro} />
            </div>
            <div className='containerCarriDetail'>
              <div className='contentCarrilDetail'>
                <div className='contentCarrilDetailInteriorSaludo'>
                  <h3>Tu Carrito</h3>
                </div>
                <div className='contentCarrilDetailInteriorDetalle'>
                  <ul>
                    {groupedCartArray.map(item => (
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
                              <Button texto="Eliminar" funcion={() => { quitar(item.id) }} />
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
                </div>
                <div className='DetailItemAdd'>
                  <button className='btn-Button btnPagar'>
                    <Link to='/inicio'>Pagar</Link>
                  </button>
                </div>
              </div>
          </div>
        </div>
      )}

      {prevIsVisibleLogin && (
        <div className='containterModalLogin' ref={modalRefLogin}>
          <div className='contentModalLogin'>
            <button onClick={mostrarDetallesLogin}>x</button>
            <div>
              <form action="">Nombre de usuario</form>
              <input type="text" />
            </div>
            <div>
              <form action="">Contraseña</form>
              <input type="password" />
            </div>
            <div className='DetailItemAdd'>
              <button className='btn-Button btnPagar'>
                <Link to='/inicio'>Iniciar Sesión</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
