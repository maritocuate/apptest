
const ItemDetail = ({nombre, img, descripcion, precio}) => {

     return (
          <div className="card text-white bg-dark" style={{width:'18rem'}}>
               <img className="card-img-top" src={img} alt={nombre} />
               <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text"><b>${precio}</b></p>
               </div>
          </div>
     )
}

export default ItemDetail
