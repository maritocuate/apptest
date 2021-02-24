import { useContext } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import { CartContext } from '../../context/cartContext'

const CartWidget = () => {

     const { cart } = useContext( CartContext )

     return (
          <>
               {
                    (cart.length > 0) && <span className="badge badge-light mr-1">{ cart.length }</span>
               }
               <RiShoppingCartLine className='cart' />
          </>
     )
}

export default CartWidget
