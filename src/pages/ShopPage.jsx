import React from 'react'
import Category from '../components/Categories/Category'
import Products from '../components/Products/Products'
import CampaginSingle from '../components/CampaginSingle/CampaginSingle'

const ShopPage = () => {
  return (
    <>
        <Category />
        <Products />
        <CampaginSingle />
        <Products />
    </>
  )
}

export default ShopPage