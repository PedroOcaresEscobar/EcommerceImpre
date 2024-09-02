import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { getDoc, doc } from 'firebase/firestore';
import {db} from '../service/firebaseConfig'


export const ItemCount = ({ cantidadValor, id }) => {
  const [stock, setStock] = useState(0); // Inicializa el stock en 0
  const [count, setCount] = useState(1);

  // useEffect para obtener el stock desde la base de datos
  useEffect(() => {
    const obtenerStock = async () => {
      try {
        const productoRef = doc(db, 'producto', id); // Usa el ID del producto para obtener el documento
        const productoSnap = await getDoc(productoRef);

        if (productoSnap.exists()) {
          const productoData = productoSnap.data();
          setStock(productoData.stock); // Actualiza el estado del stock con el valor obtenido
        } else {
          console.log('El producto no existe');
        }
      } catch (error) {
        console.error('Error al obtener el stock: ', error);
      }
    };

    obtenerStock();
  }, [id]); // Ejecuta el efecto solo cuando el productoId cambie
  
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
      cantidadValor(count - 1);
    }
  };
  
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
      cantidadValor(count + 1);
    }
  };
  
  return (
    <div className='contentItemCount'>
      <div className='btnminContentItemCount'>
        <Button contenido="-" funcion={restar} />
      </div>
     
      <p className='ValorContentItemCount'>{count}</p>
      
      <div className='btnmaxContentItemCount'>
        <Button contenido="+" funcion={sumar} />
      </div>
    </div>
  );
};
