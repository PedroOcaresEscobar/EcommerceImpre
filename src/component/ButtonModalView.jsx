import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const ButtonModalView = () => {
  const [prevIsVisibleCarro, setVisibleCarro] = useState(false);
  const [prevIsVisibleLogin, setVisibleLogin] = useState(false);

  const mostrarDetallesCarro = () => {
    // Si el carrito está visible, ciérralo; de lo contrario, ábrelo y cierra el login
    setVisibleCarro(prevIsVisibleCarro => {
      const newCarroVisible = !prevIsVisibleCarro;
      if (newCarroVisible) {
        setVisibleLogin(false); // Cierra el modal de login si el carrito se abre
      }
      return newCarroVisible;
    });
  };

  const mostrarDetallesLogin = () => {
    // Si el login está visible, ciérralo; de lo contrario, ábrelo y cierra el carrito
    setVisibleLogin(prevIsVisibleLogin => {
      const newLoginVisible = !prevIsVisibleLogin;
      if (newLoginVisible) {
        setVisibleCarro(false); // Cierra el modal de carrito si el login se abre
      }
      return newLoginVisible;
    });
  };

  return (
    <div className='containerBtnUsersShopping'>
      <div className='contentBtnUsersShopping'>
        <div className='contentBtnUsersShopping'>
          <button className='carrito' onClick={mostrarDetallesCarro}>
            <img src="https://i.ibb.co/Dttzjkw/carrito.png" className='imgCarrito' />
          </button>
          <button className='carrito' onClick={mostrarDetallesLogin}>
            <img src="https://i.ibb.co/3hWdcXj/icono-login.png" className='imgCarrito' />
          </button>
        </div>
      </div>

      {prevIsVisibleCarro && (
        <div className='containterModalCarro'>
          <div className='contentModalCarro'>
            <button onClick={mostrarDetallesCarro}>x</button>
            <div>
              <p>Productos</p>
            </div>
            <div>
              <p>Lista de productos</p>
            </div>
            <div className='DetailItemAdd'>
              <button className='btn-Button btnPagar'>
                <Link to='/inicio'>Pagar</Link>
              </button>
            </div>
          </div>
        </div>
      )}

      {prevIsVisibleLogin && (
        <div className='containterModalCarro'>
          <div className='contentModalCarro'>
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
