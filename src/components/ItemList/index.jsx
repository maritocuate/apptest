import { useState } from 'react'
import { data } from '../mocks/data.js'
import Item from './Item.jsx'

const ItemList = () => {

     const [loading, setLoading] = useState(true)
     const [recipes, setRecipes] = useState([])

     const getData = new Promise((resolve) => {
          setTimeout(()=>{
               resolve(data)
          }, 5000)
     })
     getData.then(e => {
          setRecipes(e)
          setLoading(false)
     })

     return (
          <div style={{alignItems:'center'}} className='container d-flex flex-column justify-content-center'>
               {
                    (loading) &&
                         <div className="spinner-border" role="status">
                              <span className="sr-only">Loading...</span>
                         </div>
               }
               <div className="list-group">    
                    {recipes.map(recipe => <Item key={recipe.id} {...recipe} />)}
               </div>
          </div>
     )
}

export default ItemList
