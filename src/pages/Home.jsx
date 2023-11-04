import React from 'react'
import Slider from '../components/Sliders/Slider'
import Category from '../components/Categories/Category'
import Products from '../components/Products/Products'
import Campagins from '../components/Campagins/Campagins'
import Blogs from '../components/Blogs/Blogs'
import Brands from '../components/Brands/Brands'
import CampaginSingle from '../components/CampaginSingle/CampaginSingle'

const Home = () => {
    return (
        <>
            <Slider />
            <Category />
            <Products />
            <Campagins />
            <Products />
            <Blogs />
            <Brands />
            <CampaginSingle />
        </>
    )
}

export default Home