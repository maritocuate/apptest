import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
     
     const [cart, setCart] = useState([])

     const addItem = item => setCart(item)

     const removeItem = id => {
          const newItems = cart.filter( prod => prod.item.id !== id )
          setCart(newItems)
     }

     const clear = () => setCart([])

     const isInCart = id => {
          const newItems = cart.filter( prod => prod.item.id === id )
          return (newItems.length===0) ? false : true
     }

     return(
          <CartContext.Provider value={{
               cart,
               addItem,
               removeItem,
               clear,
               isInCart
          }}>
               { children }
          </CartContext.Provider>
     )

}