import React, { Children } from 'react'

export const Layout = ({children}) => {
  return (
    <main>
          <div className='containerMainMain'>
          {children}
        </div>

    </main>
  )
}


//AGREGUE ESTA CAPA EN CASO DE QUE DESEE AGREGAR ALGUNA COSITA EXTRA SIN INTERVENIR EL INTERIOR DE LO QUE TENGO LISTO, COMO TODO LO QUE HE HECHO.