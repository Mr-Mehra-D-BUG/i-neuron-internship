import React from 'react'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
        <Slider />
        <Categories />
        <Products />
    </div>
  )
}

export default Home