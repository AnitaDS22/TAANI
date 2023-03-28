import { useEffect } from "react"
import { useParams } from "react-router-dom";



const Categoriesdetail = () => {
    const [producto, setProducto] = useState ([]);
    const {categoryName} = useParams ();

useEffect (() => {
    const fetchData = async () => {
        const response = await axios.get ("./src/stock.json");
        if (categoryName) {
            setProducto (
                response.data.filter((producto) => producto.category === categoryName)
);
    } else {
        setProducto (response.data);
    }
};
fetchData (); 
}, [categoryName]); 
  
return (
    <div>
        <div className="productos">
            {producto.map ((producto) => (
                <productos key = {producto.id} producto={producto}/>


            ))}


        </div>
    </div>
)
            };


export default Categoriesdetail