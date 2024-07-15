import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar'
import ItemListContainer from './component/ItemListContainer'


export function App() {
  


  return (

    <>
          <header >
            <NavBar />
           

    </header>
      <main>
      <ItemListContainer greeting="Bienvenido"/>
    </main>
      
    
    </>  
   

     

      
    
      
        
    
  )
}


// export default App (para exportar de fabrica la function app)
