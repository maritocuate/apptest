const Item = ({id, nombre, descripcion}) => {
     return (
          <div href="" className="card text-white bg-dark mb-2">
               <div className="card-header">
                    <h5>
                         {nombre}
                    </h5>
               </div>
               <div className="card-body">
                    <p className="mb-1">{descripcion}</p>
               </div>
          </div>
     )
}

export default Item
