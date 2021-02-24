import React, { useContext } from 'react'

import { CartContext } from '../../context/cartContext'
import { RiShoppingCartLine, RiDeleteBin6Line, RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'

function Cart() {

     const { cart } = useContext( CartContext )

     return (
          <div className='container my-4 col-4 text-center'>
               <RiShoppingCartLine className="m-4 h2"/>
               
               {
                    cart.length===0
                         ? <h1>Tu carrito está vacío</h1>
                         : 
                         <>
                              <ul className="list-group">
                                   {
                                        cart.map(prod => (
                                             <li key={ prod.item.id } className="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                                                  <span className="lead">{ prod.quantity }</span>
                                                  <span className="lead">{ prod.item.nombre }</span>
                                                  <RiDeleteBin6Line className="text-dark" />
                                             </li>
                                        ))
                                   }
                              </ul>
                              <div className="btn-group w-100 mt-3">
                                   <label className="btn btn-dark btn-lg cart">VACIAR <RiCloseCircleLine className="mb-1" /></label>
                                   <label className="btn btn-dark btn-lg cart">COMPRAR <RiCheckboxCircleLine className="mb-1" /></label>
                              </div>
                         </>
                         
               }
          </div>
     )
}

export default Cart
