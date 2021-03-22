import React, { useContext } from 'react'
import firebase from 'firebase/app'
import { getFirestore } from '../../firebase'

import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { RiShoppingCartLine, RiDeleteBin6Line, RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'

function Cart() {

     const { cart, removeItem, removeAll } = useContext( CartContext )
     const buyer = {
          name: 'Rodrigo',
          phone: '11432890',
          email: 'rodrigo@gmail.com'
     }

     const getTotal = () => {
          const sum = (cart.length>1) ? cart.reduce((a,b) => Number(a.item.precio) + Number(b.item.precio)) : cart[0].item.precio
          const quantity = (cart.length>1) ? cart.reduce((a,b) => a.quantity + b.quantity) : cart[0].quantity
          return sum*quantity
     }

     const comprar = () => {
          const db = getFirestore()
          const orders = db.collection('ordenes')
          const newOrder = {
               buyer,
               cart,
               date: firebase.firestore.Timestamp.fromDate(new Date())
          }

          orders.add(newOrder).then(({id}) => {
               removeAll()
               console.log('Compra realizada con exito')
          }).catch(e => {
               console.log('Error en la compra')
          })
     }

     return (
          <div className='container my-4 col-4 text-center'>
               <RiShoppingCartLine className="m-4 h2"/>

               {
                    cart.length===0
                         ? 
                         <>
                              <h1>Tu carrito está vacío</h1>
                              <Link to="/"><button className='btn btn-dark btn-lg mt-4'>Ver el menú</button></Link>
                         </>
                         : 
                         <>
                              <ul className="list-group">
                                   {
                                        cart.map(prod => (
                                             <li key={ prod.item.id } className="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                                                  <span className="lead">{ prod.quantity }</span>
                                                  <span className="lead">${ prod.item.precio }</span>
                                                  <span className="lead col-4">{ prod.item.nombre }</span>
                                                  <span style={{cursor:'pointer'}} onClick={()=>removeItem(prod.item.id)}><RiDeleteBin6Line className="text-dark" /></span>
                                             </li>
                                        ))
                                   }
                              </ul>
                              <p className="pt-3">
                                   Total: ${
                                        getTotal()
                                   }
                              </p>
                              <div className="btn-group w-100 mt-3">
                                   <label className="btn btn-dark btn-lg cart" onClick={()=>removeAll()}>VACIAR <RiCloseCircleLine className="mb-1" /></label>
                                   <label className="btn btn-dark btn-lg cart" onClick={()=>comprar()}>COMPRAR <RiCheckboxCircleLine className="mb-1" /></label>
                              </div>
                         </>
                         
               }
          </div>
     )
}

export default Cart
