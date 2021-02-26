import { useContext } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import { CartContext } from '../../context/cartContext'

const CartWidget = () => {

     const { cart } = useContext( CartContext )

     const quantityProducts = () => {
          let temp = (cart.length>0) ? cart.reduce( (a, b) => ({quantity: a.quantity+b.quantity})) : {quantity:0}
          return temp.quantity
     }

     return (
          <>
               {
                    (quantityProducts() > 0) && <span className="badge badge-light mr-1">{ quantityProducts() }</span>
               }
               <RiShoppingCartLine className='cart' />
          </>
     )
}

export default CartWidget
