import React, { useState } from 'react'
 
import Category from '../../Components/Category/Catergory'
import Product from '../../Components/Product/Product'
import Layout from '../../Layout/Layout'
import Carousel from "../../Components/Carousel/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Landing = () => { 
  return (
    <Layout>
        <Carousel/>
        <Category/>
        <Product/>
    </Layout>
  )
}

export default Landing