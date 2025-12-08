import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Carouse from './Components/Carousel/Carousel'
import CarouselEffect from './Components/Carousel/Carousel'

function App() { 
  return (
    <>
       <Header/>
       <CarouselEffect />
    </>
  )
}

export default App
