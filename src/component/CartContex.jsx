import {children, createContext, useContext, useState } from "react";
import React  from 'react'


//Creamos el contexto
const CartContex = createContext();





//Creamos el proveedor
export const CartProvider = ({children}) => {
    //creamos el arreglo cart y su "seteador" 
  const [cart, setCart] = useState(() => {

    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  



    //Funcion para agregar al carro 
  const addToCart = (product) => {
      
    setCart(prevCart => {
      const updateCart = [...prevCart, product];
      sessionStorage.setItem('cart', JSON.stringify(updateCart));
      return updateCart;
      
      
        })

    };

    //Funcion para aliminar producto del carro
    const removeFromCart = (productId) => {
        setCart(cart.filter(item=> item.id !==productId))
    }

    //Funcion para sumar el total del carro
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    };

  return (
    <div>
          <CartContex.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
              
              {children}
      </CartContex.Provider>
    </div>
  )
}




//Hook para usar el context
export const useCart = () => useContext(CartContex)
