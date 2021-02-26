import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
     
     const [cart, setCart] = useState([])

     const addItem = item => {
          
          let result = cart.filter( prod => prod.item.id!==item.item.id )
          let match = cart.filter( prod => prod.item.id===item.item.id )

          if(!match.length) setCart( [...cart, item ] )

          if(match.length){
               const newItem = {
                    item: item.item,
                    quantity: item.quantity+match[0].quantity
               }
               setCart( [...result,  newItem ] )
          } 
     }

     const removeItem = id => {
          const newItems = cart.filter( prod => prod.item.id !== id )
          setCart(newItems)
     }

     const removeAll = () => setCart([])

     const isInCart = id => {
          const newItems = cart.filter( prod => prod.item.id === id )
          return (newItems.length===0) ? false : true
     }

     return(
          <CartContext.Provider value={{
               cart,
               addItem,
               removeItem,
               removeAll,
               isInCart
          }}>
               { children }
          </CartContext.Provider>
     )

}