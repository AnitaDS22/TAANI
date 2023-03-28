 import { Link } from "react-router-dom"
 import Styles from "./card.module.scss"

 const Card = ({producto}) => {
   return (
     <Link to={`${producto.id}`}>
     <div className={Styles.container}>
         <h3 >{producto.description}</h3>
         <img className="imagencard" src={producto.img} alt={producto.category} width="200" height="200"/>
         <p> Price: {producto.price}</p>
        <p> Stock: {producto.stock}</p>
       </div>
       </Link>
 )
}

export default Card