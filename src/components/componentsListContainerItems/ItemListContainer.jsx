import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import {db} from '../../service/firebaseConfig'
import { LoadingView } from '../componentsSecundarios/LoadingView';
import { useCart } from '../../context/CartContext';
import '../../styles/ProductosMain.css'
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();
  const { setVCB } = useCart();
//hock useEffect para traer los productos desde la base de datos donde obtendremos estos filtrados por id 
  useEffect(() => {
    setVCB(true);
  //Primera Condición si hay categoría.
  if (categoria) {
    //Creamos la función "productoCategoria" para guardar consulta a FireBase.
    const productoCategoria = query(
      collection(db, "producto"), 
      //where(donde) comparamos category de la base de datos con categoría y si son de la misma categoría los listara.
      where("category", "==", categoria)
    );
    //Usamos getDocs un metodo de FireBase para traer nuestra consulta y configuración.
   getDocs(productoCategoria).then(snapshot => {
  // Aquí snapshot es el resultado de la consulta
  const prod = snapshot.docs.map(doc => {
    // Obtenemos los datos de cada documento
    const data = doc.data();
    // Retornamos un objeto con los datos y el id del documento
    return { id: doc.id, ...data };
  });
     // Ordenar productos por precio
     prod.sort((a, b) =>  (a.price - b.price));
     //Setiamos nuestro arreglo de items con los productos ordenados.
     setItems(prod);
     //este finally lo agrego por si alguien entra ddirecto al link producto/:categoria
    }).finally(() => {
      // Usar setTimeout para agregar el retraso y mostrar la animación de cargando no tan rápido, asi no parece mensaje subliminal. 
      setTimeout(() => {
        //Setiamos el cargando a false para que se oculte y se muestre nuestro arreglo.
        setCargando(false);
      }, 500); 
    });

  } else {
    getDocs(collection(db, "producto")).then(snapshot => {
      const prod = snapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });

      // Ordenar productos por título alfabéticamente y pro precio ascendente 
      prod.sort((a, b) => a.category.localeCompare(b.category) || (a.price - b.price));

      setItems(prod);
    }).finally(() => {
      // Usar setTimeout para agregar el retraso y mostrar la animación de cargando no tan rápido, asi no parece mensaje subliminal. 
      setTimeout(() => {
        setCargando(false);
      }, 500); 
    });
  }
}, [categoria]);



  return (
    <>
      {(cargando)
        ? (<LoadingView cargando={cargando} />)
        :(<div className='containerItemsList'>
          <ItemList items={items} />
        </div>)
      }
    </>

  );
};


