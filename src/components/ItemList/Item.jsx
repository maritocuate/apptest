import { Link } from "react-router-dom";

const Item = ({id, nombre, descripcion}) => {
     return (
          <Link to={'/item/'+id}>
               <div href="" className="card text-white bg-dark mb-2" style={{width: '22rem'}}>
                    <div className="card-header">
                         <h5>
                              {nombre}
                         </h5>
                    </div>
                    <div className="card-body">
                         <p className="mb-1">{ `${descripcion.substring(0, 90)}...` }</p>
                    </div>
               </div>
          </Link>
     )
}

export default Item
