import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Carouse from './Components/Carousel/Carousel'
import CarouselEffect from './Components/Carousel/Carousel'
import CategoryCard from './Components/Category/CategoryCard'
import Category from './Components/Category/Catergory'
import Product from './Components/Product/Product'

function App() { 
  return (
    <>
       <Header/>
       <CarouselEffect />
       <Category/> 
       <Product/>
    </>
  )
}

export default App
