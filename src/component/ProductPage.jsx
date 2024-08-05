import React, { useState } from 'react'
import ItemListContainer from './ItemListContainer'
import { Link , useParams} from 'react-router-dom'

const ProductPage = () => {

    return (
        <>
        <div className='containerTitle'>
                <h1>Productos</h1>
                <div className='ContainterFilterCategory'>
                    <div className='ContentFilterCategory'>
                        <div className='FilterCategory'>
                           <Link className='LinkCategory' to='/productos/' >Todos</Link>
                            <Link className='LinkCategory' to='/productos/Agendas' >Agendas</Link>
                            <Link className='LinkCategory' to='/productos/Tazas' >Tazas</Link>
                            <Link className='LinkCategory' to='/productos/Cuadros' >Cuadros</Link>
                        </div>

                    </div>
                    
                </div>
        </div>

        <div className='containerComponent'>
                <ItemListContainer />
                
        </div>
            
      </>
     
  )
}

export default ProductPage
