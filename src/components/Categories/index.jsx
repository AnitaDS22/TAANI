
import {Link} from "react-router-dom";
import Styles from "./categories.module.scss";

const Categories = () => {
  return (
    <nav className={Styles.container}>
    
 <Link to ="/Necklaces">  
 <p className="opcion" >Necklaces</p> 
 </Link> 
 <Link to ="/Earrings">  
 <p className="opcion" >Earrings
  </p> 
 </Link> 
 <Link to ="/Rings">  
 <p className="opcion" >Rings</p> 
 </Link> 



    </nav>

  )
}

export default Categories
