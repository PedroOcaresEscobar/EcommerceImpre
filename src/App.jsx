
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar'
import { Layout } from './components/Layout';
import  { ProductPage } from './components/ProductPage';
import { ItemDetailContainer } from './components/componentsDetails/ItemDetailContainer';
import { Pagar } from './components/componentsPagos/Pagar';
import { CheckOut } from './components/componentsPagos/CheckOut';


function App() {
  return (
    <>
       <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<Layout><ProductPage/></Layout>}  /> 
          <Route path='/productos' element={<Layout><ProductPage/></Layout>} />
          <Route path='/productos/:categoria' element={<Layout><ProductPage /></Layout>} /> 
          <Route path='/detalles/:id' element={<Layout><ItemDetailContainer /></Layout>} /> 
          <Route path='/pagar' element={<Layout><Pagar /></Layout>} />
          <Route path='/pagar/checkout' element={<Layout><CheckOut/></Layout>} />
          <Route path='/nosotros' element={<main><h2>Nosotros</h2></main>} />
          <Route path='/contacto' element={<main><h2>Contacto</h2></main>} />
          <Route path='*' element={<main><h2>Te perdiste</h2></main>} />
        </Routes>   
      </BrowserRouter>
    </>
  )
}

export default App
