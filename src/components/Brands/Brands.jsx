import React from 'react'
import './Brands.css'
import BrandItem from './BrandItem'

const Brands = () => {
  return (
    <section class="brands">
    <div class="container">
      <ul class="brand-list">
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
      </ul>
    </div>
  </section>
  )
}

export default Brands