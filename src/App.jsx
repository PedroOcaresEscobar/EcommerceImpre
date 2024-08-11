import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import { Layout } from './component/LayoutF';
import ProductPage from './component/ProductPage';
import DetailPage from './component/DetailPage';

export function App() {
  return (
    <>
      
  
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<main><h2>contactos</h2></main>}  /> 
          <Route path='/productos' element={<Layout><ProductPage /></Layout>} />
          <Route path='/productos/:categoria' element={<Layout><ProductPage /></Layout>} /> 
          <Route path='/detalles/:id' element={<Layout><ProductPage /><DetailPage /></Layout>} /> 
          <Route path='/nosotros' element={<main><h2>Nosotros</h2></main>} />
          <Route path='/contacto' element={<main><h2>Contacto</h2></main>} />
          <Route path='*' element={<main><h2>Te perdiste</h2></main>} />
        </Routes>  
      </BrowserRouter>
    
    
     
    </>
  );
}
