import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import {db} from '../service/firebaseConfig'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

//hock useEffect para traer los productos desde la base de datos donde obtendremos estos filtraados por id 
useEffect(() => {
  if (categoria) {
    const productoCategoria = query(
      collection(db, "producto"), 
      where("category", "==", categoria)
    );
    getDocs(productoCategoria).then(snapshot => {
      const prod = snapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });

      // Ordenar productos por título alfabéticamente
      prod.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return a.price - b.price;
      });

      setItems(prod);
    }).finally(() => setCargando(false));
  } else {
    getDocs(collection(db, "producto")).then(snapshot => {
      const prod = snapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });

      // Ordenar productos por título alfabéticamente
      prod.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return a.price - b.price;
      });

      setItems(prod);
    }).finally(() => setCargando(false));
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
