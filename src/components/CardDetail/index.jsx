import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Styles from "./carddetail.module.scss"

function CardDetail  ()  {

    const [producto, setproducto]= useState(null);

    const {id} = useParams();
  
    useEffect ( () => {
        fetch ("../src/stock.json")
        .then (response => response.json())
        .then (data => 
        setproducto(data.filter(producto =>
          producto.id === id)))
         
    }, [id]);

    if (!producto){
      return <div>
        <h1>Loading ...</h1></div>
    }


  return (
    <div className={Styles.detailcard}>
        <h1>{producto.category}</h1>
    <h3 >{producto.description}</h3>
        <img className="imagencard" src={producto.img} alt={producto.category} width="200" height="200"/>
        <p> Price: ${producto.price}</p>
        <p> Stock: {producto.stock}</p>
        

    </div>
  )
}

export default CardDetail