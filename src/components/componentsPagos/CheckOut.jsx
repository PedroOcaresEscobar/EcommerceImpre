import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig';
import { useCart } from '../../context/CartContext';
import '../../styles/CheckOut.css';
import { Button } from '../componentsSecundarios/Button';
export const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [comuna, setComuna] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [order, setOrder] = useState(null); // Cambié el valor inicial a null
  const [numOrder, setNumorder] = useState(false);

  const { cart, clearCart, setVCB } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cart || cart.length === 0) {
      // console.error('El carrito está vacío o indefinido');
      return;
    }

    const user = {
      nombre,
      apellido,
      email,
      celular,
      direccion,
      comuna,
      ciudad,
    };

    const data = { user, cart };

    try {
      // Crear la referencia a la colección "order"
      const orderRef = collection(db, 'order');

      // Agregar la orden a la colección
      const orderDoc = await addDoc(orderRef, data);
      // console.log('Order creada con ID: ', orderDoc.id);

      // Iterar sobre cada producto en el carrito para actualizar el stock
      for (const product of cart) {
        if (!product.id || product.stock === undefined || product.quantity === undefined) {
          // console.error('Faltan datos de producto, stock o cantidad en el carrito');
          return;
        }

        const stockRef = doc(db, 'producto', product.id);
        const newStock = product.stock - product.quantity;

        if (newStock < 0) {
          // console.error('Stock insuficiente para el producto', product.title);
          return;
        }

        await updateDoc(stockRef, { stock: newStock });
        // console.log(`Stock actualizado para el producto: ${product.title}`);
      }

      clearCart();
      setOrder(orderDoc); // Guardar el documento completo de la orden
      setNumorder(true);
    } catch (error) {
      // console.error('Error al procesar la orden: ', error);
    }
  };

  useEffect(() => {
    setVCB(false);
    return () => {
      setVCB(true);
    };
  }, [setVCB]);

  return (
    <>
      {numOrder === false ? (
        <div className='containerFormularioCheckOut'>
          <div className='contentFormularioCheckOut'>
            <h1>Finalizando compra</h1>
            <form className='formularioOrder' onSubmit={handleSubmit}>
              {/* Campos del formulario */}
              <div className='containerInputForm FirstIF'>
                <div className='InputFormRow '>
                  <span className='spanOrderForm'>Nombre</span>
                  <input type='text' className='inputOrderForm' onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div className='InputFormRow '>
                  <span className='spanOrderForm'>Apellido</span>
                  <input type='text' className='inputOrderForm' onChange={(e) => setApellido(e.target.value)} required />
                </div>
              </div>

              <div className='containerInputForm SecondIF'>
                <div className='dobleColumn'>
                  <div className='InputFormRow '>
                    <span className='spanOrderForm'>Mail</span>
                    <input type='email' className='inputOrderForm' onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className='InputFormRow '>
                  <span className='spanOrderForm'>Celular</span>
                  <input type='number' className='inputOrderForm' onChange={(e) => setCelular(e.target.value)} required />
                </div>
              </div>

              <div className='containerInputForm FirstIF'>
                <div className='InputFormRow '>
                  <span className='spanOrderForm'>Dirección</span>
                  <input type='text' className='inputOrderForm' onChange={(e) => setDireccion(e.target.value)} required />
                </div>
                <div className='InputFormRow '>
                  <span className='spanOrderForm'>Comuna</span>
                  <input type='text' className='inputOrderForm' onChange={(e) => setComuna(e.target.value)} required />
                </div>
                <div className='InputFormRow '>
                  <span className='spanOrderForm'>Ciudad</span>
                  <input type='text' className='inputOrderForm' onChange={(e) => setCiudad(e.target.value)} required />
                </div>
              </div>

              <div className='containerInputForm'>
                <button className='btn' type='submit'>
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className='containerFormularioCheckOut'>
          <div className='contentFormularioCheckOut'>
            <h1>Compra Realizada Con Éxito</h1>
              <h2>Nro Orden: {order && order.id}</h2>
              <h3>Gracias por su compra</h3>
              <Link to="/productos"><Button contenido="Volver a Productos"/></Link>
          </div>
        </div>
      )}
    </>
  );
};
