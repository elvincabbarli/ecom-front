import React from 'react'
import './ProductDetails.css'
import BreadCrumb from './BreadCrumb'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductTabs from './ProductTabs'

const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <BreadCrumb />
          <div className="single-content">
            <main className="site-main">
              <ProductGallery />
              <ProductInfo />
            </main>
          </div>
          <ProductTabs />
        </div>
      </div>
    </section>
  )
}

export default ProductDetails