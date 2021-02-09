import { useState, useEffect } from "react"
import ItemDetail from "../../components/ItemDetail"
import { data } from '../../components/mocks/data.js'


const ItemDetailContainer = () => {

     const [loading, setLoading] = useState(true)
     const [product, setProduct] = useState([])
     
     useEffect(() => {
          const getItems = new Promise((resolve) => {
               setTimeout(()=>{
                    resolve(data)
               }, 2000)
          })
          
          getItems.then(e => {
               setProduct(e)
               setLoading(false)
          })
     }, [])


     return (
          <div className='container d-flex flex-column'>
               {
                    loading ?
                         <div className="spinner-border" role="status">
                              <span className="sr-only">Loading...</span>
                         </div>
                         :
                         <ItemDetail key={product[0].id} {...product[0]}/>
                         //product.map(prod => <ItemDetail key={prod.id} {...prod}/>)
               }
               
          </div>
     )
}

export default ItemDetailContainer
