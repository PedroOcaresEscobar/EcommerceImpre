import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/cartItemDetail.css'
import {getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig';
import { ItemDetail } from './ItemDetail';
import { LoadingView } from '../componentsSecundarios/LoadingView';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);

  
  useEffect(() => {
    setCargando(true);
    // Obtener todos los productos para la navegación
    const productRef = doc(db, "producto", id);
    getDoc(productRef)
      .then(productSnapshot => {
        if (productSnapshot.exists()) {
          setProducto({ id: productSnapshot.id, ...productSnapshot.data() });
        }
      }).finally(() => {
        // Usar setTimeout para agregar el retraso y mostrar la animación de cargando no tan rápido, asi no parece mensaje subliminal. 
        setTimeout(() => {
          setCargando(false);
        }, 500); 
      });
  
  }, [id]);

  return (
    <>
    {cargando ? (
      <LoadingView cargando={cargando} />
    ) : (
      <div className="containerItemDetailCard">
        <ItemDetail producto={producto} />
      </div>
    )}
  </> 
 
  );
};


