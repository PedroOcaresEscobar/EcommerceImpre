import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsById } from '../asyncmock';
import { Button } from './Button';
import { ItemCount } from './ItemCount';

const ItemDetailContainer = () => {
  const { id } = useParams();
  
  const navigate = useNavigate(); //hock para interactuar con la barra de busqueda
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    getProductsById(id)
      .then(res => setProducto(res))
      .catch(err => console.error(err))
      .finally(() => setCargando(false));
  }, [id]);

  const mostrarSiguiente = () => {
    navigate("/detalles/"+(parseInt(id) + 1));
  };

  const mostrarAnterior = () => {
    navigate(`/detalles/${parseInt(id) - 1}`);
  };

  const añadir = () => {
    console.log('Añadir al carrito:', producto);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
  };

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (!producto) {
    return <p><div className='DetailItemAdd'>
    <Button texto="Anterior" funcion={mostrarAnterior} />
  </div></p>;
  }
  const calcularTotal = () => {
    
  }
  return (
    <div>
      <div className='containerDetailItem'>
        <div className='contentDetailItem'>
          <div className='cardDetailItem'>
            <div className='btnCerrarDetail'></div>
            <div className='imgItemDetail'>
              <img className='imageItemDetailItem' src={producto.image} alt={producto.title} />
            </div>
            <div className='DetailItem'>
              <div className='containtDetailItemTitle'>
                <p className='DetailItemTitle'>{producto.title}</p>
                <p className='descriptionPLeft'>{producto.category}</p>
              </div>
              <div className='contentDetailItemPrice'>
                <p className='DetailItemPrice'>Valor: {formatPrice(producto.price)} CLP</p>
              </div>
              <div className='DetailItemCount'>
                <p className='parrafoCantidad'>Cantidad</p>
                <ItemCount />
              </div>
              <div className='DetailItemAdd'>
                <Button texto="Añadir al carrito" funcion={añadir} />
              </div>
            </div>
          </div>
        </div>
        <div className='nextAndPreview'>
          <div className='DetailItemAdd'>
            <Button texto="Anterior" funcion={mostrarAnterior} />
          </div>
          <div className='DetailItemAdd'>
            <Button texto="Siguiente" funcion={mostrarSiguiente} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
