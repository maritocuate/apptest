import { useEffect, useState } from 'react'

import { getFirestore } from '../../firebase'
import Item from './Item.jsx'

const ItemList = () => {

     const [loading, setLoading] = useState(true)
     const [items, setItems] = useState([])

     useEffect(() => {
          setLoading(true)

          const db = getFirestore()
          const itemsCollection = db.collection('items')

          itemsCollection.get().then((querySnapshot) => {
               (querySnapshot.size === 0) && console.log("No results")
               setItems( querySnapshot.docs.map(doc => doc.data()) )
          
          }).finally(() => setLoading(false))
     }, [])

     return (
          <div style={{alignItems:'center'}} className='container d-flex flex-column justify-content-center'>
               {
                    (loading) &&
                         <div className="spinner-border" role="status">
                              <span className="sr-only">Loading...</span>
                         </div>
               }
               <div className="d-flex flex-wrap justify-content-between">    
                    {items.map(item => <Item key={item.id} {...item} />)}
               </div>
          </div>
     )
}

export default ItemList
