import '../../components/ItemCount'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {

     const onAdd = () => {
          console.log('ON ADD FUNCTION')
     }

     return (
          <div className='container d-flex flex-column'>
               <h1 className='display-4'>{greeting}</h1>
               <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
     )
}

export default ItemListContainer
