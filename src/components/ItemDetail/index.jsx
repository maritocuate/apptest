import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount"

const ItemDetail = (props) => {

     const { cart, addItem } = useContext( CartContext )
     const { nombre, img, descripcion, precio } = props
     const history = useHistory();
     
     const onAdd = (stock, counter) => {
          if(counter <= stock) addItem( [...cart, { item: {...props}, quantity: counter }] )
     }

     useEffect(() => {
     }, [cart])

     return (
          <div className='container item-detail-container d-flex py-4 mt-4'>
               <div className="card text-dark bg-light p-3 col-8">
                    <img className="card-img" src={'../'+img} alt={nombre} />
                    <div className="card-img-overlay" style={{width:'18rem', background:'rgb(255 255 255 / 80%)'}}>
                         <h4 className="card-title">{nombre}</h4>
                         <p className="card-text">{descripcion}</p>
                         <p className="card-text"><b>${precio}</b></p>
                    </div>
               </div>

               {
                    (cart.length < 1)
                    ? <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    : <button className='btn-gocart' onClick={()=> history.push('/cart') }>GO CART</button>
               }
               
          </div>
     )
}

export default ItemDetail
