import { useState, useEffect } from "react"
import ItemDetail from "../../components/ItemDetail"
import { data } from '../../components/mocks/data.js'


const ItemDetailContainer = (props) => {

     const [loading, setLoading] = useState(true)
     const [product, setProduct] = useState({})
     
     useEffect(() => {
          const getItems = new Promise((resolve) => {
               setTimeout(()=>{
                    resolve(data)
               }, 2000)
          })
          
          getItems.then(e => {
               const selectedItem = e.filter( prod => prod.id===Number(props.match.params.id) )
               setProduct(selectedItem)
               setLoading(false)
          })
     }, [])


     return (
          <div style={{alignItems:'center'}} className='container d-flex flex-column justify-content-center'>
               {
                    loading ?
                         <div className="spinner-border mt-5" role="status">
                              <span className="sr-only">Loading...</span>
                         </div>
                         :
                         <ItemDetail key={product[0].id} {...product[0]}/>
               }
               
          </div>
     )
}

export default ItemDetailContainer
