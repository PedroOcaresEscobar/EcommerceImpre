import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { NavBar } from './component/NavBar'

import { Layout } from './component/Layout';
import ProductPage from './component/ProductPage';
import DetailPage from './component/DetailPage';
import { ItemDetailContainer2 } from './component/ItemDetailContainer2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>

           

          <Route path='/' element={<main><h2>contactos</h2></main>}  /> 
          <Route path='/productos' element={<Layout><ProductPage/></Layout>} />
          <Route path='/productos/:categoria' element={<Layout><ProductPage /></Layout>} /> 
          <Route path='/detalles/:id' element={<Layout><ItemDetailContainer2/></Layout>} /> 
          <Route path='/nosotros' element={<main><h2>Nosotros</h2></main>} />
          <Route path='/contacto' element={<main><h2>Contacto</h2></main>} />
          <Route path='*' element={<main><h2>Te perdiste</h2></main>} />
        </Routes>   
      </BrowserRouter>
    </>
  )
}

export default App
