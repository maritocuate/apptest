import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

     const [counter, setCounter] = useState(1)

     const checkValue = val => {
          if(val === initial-1) return initial
          if(val === stock+1) return stock
          return val
     }

     const moveItems = direction => {
          let val = counter
          if(direction === 'add') val = checkValue(counter+1)
          if(direction === 'sub') val = checkValue(counter-1)
          setCounter(val)
     }

     return (
          <div id='itemcount' className="card bg-dark">
               <div className="card-header">
                    Camisa Tiger
               </div>
               <div className="card-body">
                    <div className="btn-group w-100" role="group" aria-label="Basic example">
                         <button onClick={()=>moveItems('sub')} type="button" className="btn btn-secondary">-</button>
                         <input type='number' value={counter} readOnly/>
                         <button onClick={()=>moveItems('add')} type="button" className="btn btn-secondary">+</button>
                    </div>
               </div>
               <div className="card-footer">
                    <button
                         className='btn bg-yellow btn-block'
                         disabled={(stock===0) ? 'disabled': ''}
                         onClick={onAdd}
                         >Agregar al carrito</button>
               </div>
          </div>
     )
}

export default ItemCount
