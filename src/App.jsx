import { useEffect, useState } from 'react'
import { Route, Routes, Navigate, useParams } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import './stock.json'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import CardDetail from './components/CardDetail'
import Categories from './components/Categories'
import Categoriesdetail from './components/Categoriesdetail'


function App() {

 const [producto, setproducto]= useState ([])

  useEffect ( () => {
    fetch ("../src/stock.json")
    .then (response => response.json())
    .then (data => setproducto (data.producto))
    }, []);
 
console.log(producto)

  return (
    <div>
      
    <Navbar/>  

    <Categories/>

<Routes>
<Route path="/" element={ <Navigate to="/home" /> } />
<Route path="/home" element={ <Home/> } />
<Route path="/producto" element= {<ItemListContainer producto={producto}/> }/>
<Route path="/producto/:id" element= {<CardDetail />}/>
<Route path="/producto/:category" element = {<Categoriesdetail/>}/>


</Routes>

 </div>     
    
  )
}

export default App
