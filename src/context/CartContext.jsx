//En nuestro CartContext agregaremos las funcionalidades del
//boton carro el cual mantendra nuestro estado de compra hasta pasar a pagar.
//En el cual agregaremos funciones CRUD para controlar nuestro carro.
import { createContext, useContext, useState } from "react";
import React from "react";


//Creamos el contexto para mantener el estado de compra en el boton del carro. 
const CartContext = createContext();

//Creamos el PROVIDER y le damos como "prop" un children ya que estara en la gerarquia maxima.
export const CartProvider = ({ children }) => {
    //Creamos primeramente nuestra variable cart que es el que contendra nuestros productos.
    const [cart, setCart] = useState(() => {
        const savedCart = sessionStorage.getItem('cart');
        //tenermos que retorna el savedCart transformado a un arreglo tipo JavaScrip
        // se retorna el savedCart, trae los datos y los transforma en un arreglo de JD,
        //Luego sino se encuentra esta información se retornara un array vacío.
        return savedCart ? JSON.parse(savedCart) : [];
    })

    const [vCB,setVCB] = useState(true)
    //Ahora crearemos las funciones para agregar, quitar, calcular los productos
    //en el carro. Definimos la funcion addCart y le damos el prop producto
    const addCart = (producto) => {
        // Verificar si la cantidad del producto es válida
        if (producto.quantity <= producto.stock) {
            setCart(prevCart => {
                // Encuentra el índice del producto en el carrito
                const existingProductIndex = prevCart.findIndex(item => item.id === producto.id);
    
                if (existingProductIndex > -1) {
                    // Si el producto ya existe, actualiza su cantidad
                    const updatedCart = [...prevCart];
                    const currentProduct = updatedCart[existingProductIndex];
                    
                    // Verificar que la nueva cantidad no exceda el stock disponible
                    if (currentProduct.quantity + producto.quantity <= producto.stock) {
                        updatedCart[existingProductIndex].quantity += producto.quantity;
                        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
                        return updatedCart;
                    } else {
                        return prevCart;
                    }
                } else {
                    // Si el producto no existe, agrégalo al carrito
                    const updatedCart = [...prevCart, producto];
                    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
                    return updatedCart;
                }
            });
        }
    };

    //Crearemos la funcion para remover un producto por su ID.
    const removeFromCart = (productoID) => {
        //usamos la función setCart actualizar nuestro estado
        //pasamos nuestro estado actual "cart" y usamos el método
        //FILTER() el cual revisara los item del arreglo donde todos los items
        //item.id que tengan el id igual al productoID se excluirán del nuevo arreglo
        //o sea filtrara todos los item que tengan el item.id distinto del productoID
        setCart(cart.filter(item => item.id !== productoID))

    };
    
    //Creamos la funcion getTotal para obtener la suma total de los productos que
    //se encuentran en el carro, para esto usaremos el metodo reduce la que 
    //recibe dos parametros el primero que sera la funcion reductora :
    //(total, item) => total + item.price * item.quantity y 
    //0 en donde tenemos total que se inicializa en 0 e item que es el objeto del arreglo
    //que desestructaremos para obtener el precio por la cantidad y sumarlo al total y 
    //asi hasta completar todos los items
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    };
    const productCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }
    const formatPrice = (price) => {
        if (price === undefined || price === null) {
          price(0)
        }
        return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
      };

    // Creamos la funcion clearCart la cual limpiara nuestro CartProvider
    // luego usamos la funcion setCart para actualizar nuestro estado a 
    // un array vacio, luego al sessionStorage le quitamos con el motodo
    // removeItem nuestro arreglo cart
    const clearCart = () => {
        setCart([]);
        sessionStorage.removeItem('cart');
    };

    // Cramos la funcion getCartItemCount para obtener el numero total de item,
    // usamos el metodo ya mencionado reduce y le damos parametros similares,
    // solo cambiamos el calculo que se realiza.
    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Creamos la funcion getGrupedCart para agrupar los objetos del carro que tengan la misma id,
    // la funcion grupedCart la usamos para almacenar el nuevo valor que nos retornara el, metodo
    // reduce donde tendremos nuestro acumulador y nuestro objeto, tenemos que si el acumulador id es verdadero,
    // entonces a la cantidad se le agregara la cantidad que viene con el nuevo objeto. 
    // sino el arreglo del acumulador agregara el nuevo item. luego retornamos el acumulador en grupedCArt y este
    // grupo del carro lo pasamos al getGRoupedCart
    const getGroupedCart = () => {
        const grupedCart = cart.reduce((acumulador, item) => {
            if (acumulador[item.id]) {
                acumulador[item.id].quantity += item.quantity;
            } else {
                acumulador[item.id] = { ...item };
            }
            return acumulador;
        }, {})
        return Object.values(grupedCart);
    }


    // Creamos la funcion findProductCart a la cual le damos el parametro prodctoID
    // este lo toma para comparar con el item.id si son extrictamente iguales entonces nos traera el producto
    const findProductCart = (productoID) => {
        return cart.find(item => item.id === productoID);
    };


    // Creamos la funcion applyDiscount le entregamos como parametro porcentajeDescuento
    // luego creamos discount donde le entregamos el decuento total que sera:
    // el total * porcentajeDescuento / 100 da igual el orden por lo de la conmutatividad.
    const applyDiscount = (porcentajeDescuento) => {
        const discount = getTotal() * (porcentajeDescuento / 100);
        return getTotal() - discount;
    };
 
    return (
    // Aquí proporcionamos las funciones y el estado que estarán disponibles de manera global
    // para todos los componentes que consumen este contexto.
        <>
            <CartContext.Provider value=
                {{
                    cart, productCount,addCart, removeFromCart, clearCart,formatPrice,
                    getTotal, getGroupedCart, getCartItemCount, findProductCart, applyDiscount,vCB, setVCB
                }} >
                {children}
            </CartContext.Provider>
        </>
    )

};
// aca definimos un custom hook llamado useCart que usara el contexto del cartContext
export const useCart = () => useContext(CartContext);
