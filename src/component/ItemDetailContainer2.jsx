import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../service/firebaseConfig'
import { getDoc, doc} from 'firebase/firestore'

export const ItemDetailContainer2 = () => {
  const [producto, setProd] = useState({})
  const [cargando, setCargando] = useState(true)
  const [count, setCount] = useState(0)
  const { id } = useParams()

  useEffect(() => {
    setCargando(true);
    setCount(1);
   
    const productRef = doc(db, "producto", id)
    getDoc(productRef).then(snapshot => {
      setProducto(snapshot.data())
    }).finally(setCargando(false))



  }, [id]);

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



  console.log(id)

  if (cargando) {
    return (
      <h1>Cargando....</h1>
    )
  }

  return (
    <>
      {producto &&
        <ItemDetail producto={producto} />
      }
    </>


  )
}

