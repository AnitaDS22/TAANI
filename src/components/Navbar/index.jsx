
import { Link } from "react-router-dom";
import Styles from "./navbar.module.scss"



const Navbar = ({icono}) => {
  return (
    <nav className={Styles.container}>
  <Link to="/home">   
 <a href="#" > 
 <img src="../src/assets/logotaani.jpg" alt="" width="130" height="90"/></a>  
 </Link> 

 <Link to ="/home">  
 <p className="opcion" >INICIO</p> 
 </Link> 
 <Link to ="/producto">  
 <p className="opcion" >PRODUCTOS</p> 
 </Link> 
 <Link to ="/categoria">  
 <p className="opcion" >
  </p> 
 </Link> 
 <Link to ="/nosotros">  
 <p className="opcion" >NOSOTROS</p> 
 </Link> 
 <Link to ="/contacto">  
 <p className="opcion" >CONTACTO</p> 
 </Link> 



<div>
<img src="../src/assets/cart.svg" alt="" width="40" height="40"/>
<p>07</p>
</div>


    </nav>
  );
};

export default Navbar