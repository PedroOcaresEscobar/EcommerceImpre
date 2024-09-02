import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from './Button';
import { ItemCount } from './ItemCount';
import { useCart } from '../context/CartContext';
import { getDoc, doc } from 'firebase/firestore';
import {db} from '../service/firebaseConfig'



const ItemDetailContainer = () => {
  const { id } = useParams();
  
  const navigate = useNavigate(); //hock para interactuar con la barra de busqueda
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const [isVisible, setVisible] = useState(true);
  const [count, setCount] = useState(0)
  const [isVisibleLastID, setVisibleLastID] = useState(true);

  const { addCart } = useCart()//traemos la funcion addToCart desde nuestro context con el hooc
  


  

  useEffect(() => {
    setCargando(true);
    setCount(1);
   
    const productRef = doc(db, "producto", id)
    getDoc(productRef).then(snapshot => {
      setProducto(snapshot.data())
    }).finally(setCargando(false))



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
  }, [id]);


  const manejadorcantidadValor = (newCount) => {
    setCount(newCount);
  };

  const cerrarModalDetail = () => {
    navigate("/productos");
  };

  const mostrarSiguiente = () => {
    navigate("/detalles/"+(parseInt(id) + 1));
  };

  const mostrarAnterior = () => {
    navigate(`/detalles/${parseInt(id) - 1}`);
  };

  const añadir = () => {
   
    addCart({ ...producto, quantity: count });
    
  };



  if (cargando) {
    return <p>Cargando...</p>;
  };

  if (!producto) {
    return(
    <div>
      <div className='noHayMasProductos'>
          <img src="https://i.ibb.co/kMNSFTL/no-hay.png" alt="" />
          <div className='DetailItemAdd'>
        <Button contenido="Volver" funcion={mostrarAnterior} />
     
      </div>
      </div>  
     
    </div>
  )}
  const calcularTotal = () => {
    //incluir logica par a multiplicar la canbtidad * producto.price
  }
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

export default ItemDetailContainer;
