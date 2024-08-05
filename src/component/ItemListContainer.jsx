import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { getProducts } from '../asyncmock'; // Asegúrate de que la ruta sea correcta
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      getProducts()
        .then(res => setItems(res.filter(e => e.category === categoria)))
        .catch(err => console.error(err))
        .finally(() => setCargando(false));
    } else {
      getProducts()
        .then(res => setItems(res))
        .catch(err => console.error(err))
        .finally(() => setCargando(false));
    }
  }, [categoria]);

  if (cargando) {
    return <h3>cargando....</h3>;
  }

  return (
    <div className='containerItemsList'>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
