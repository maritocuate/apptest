import { useState, useEffect } from "react"

import { getFirestore } from '../../firebase'
import ItemDetail from "../../components/ItemDetail"

const ItemDetailContainer = (props) => {

     const [loading, setLoading] = useState(true)
     const [product, setProduct] = useState({})
     
     useEffect(() => {
          setLoading(true)

          const db = getFirestore()
          const itemsCollection = db.collection('items')
          const itemById = itemsCollection.where('id', '==', props.match.params.id)
          
          itemById.get().then((querySnapshot) => {
               setProduct( querySnapshot.docs.map(doc => doc.data()) )
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
