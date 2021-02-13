import '../../components/ItemCount'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greeting}) => {

     return (
          <div className='container d-flex flex-column'>
               <div className='title-header'><h3>{greeting}</h3></div>
               <ItemList />
          </div>
     )
}

export default ItemListContainer
