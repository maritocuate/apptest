import '../../components/ItemCount'
//import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greeting}) => {

     /* const onAdd = (stock, counter) => {
          if(counter <= stock) alert('ON ADD FUNCTION')
     } */

     return (
          <div className='container d-flex flex-column'>
               <h1 className='display-4'>{greeting}</h1>
               <ItemList />
               {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
          </div>
     )
}

export default ItemListContainer
