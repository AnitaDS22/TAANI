 import Card from "../Card"


const ItemListContainer = ({producto}) => {
  return (
    <div>
      
      {producto.map((producto) => (

<Card key={producto.id} producto={producto}/>

      ) )  }  
      
      </div>
  )
}




export default ItemListContainer
