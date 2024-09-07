import React from 'react'

import { Link } from 'react-router-dom'
import { ItemListContainer } from './componentsListContainerItems/ItemListContainer';

export const ProductPage = () => {

    return (
        <>
            <div className='containerTitle'>
                <h1>Productos</h1>
                {/* Navegación por categoría */}
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
            {/* Contenedor de los productos, ya sea filtrados o no */}
            <div className='containerComponent'>
                <ItemListContainer/>
            </div>
        </> 
    )
};


