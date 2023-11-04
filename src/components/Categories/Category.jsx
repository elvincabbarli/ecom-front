import React from 'react'
import './Category.css'
import CategoryItem from './CategoryItem'

const Category = () => {
    return (
        <section class="categories">
            <div class="container">
                <div class="section-title">
                    <h2>All Categories</h2>
                    <p>Summer Collection New Morden Design</p>
                </div>
                <ul class="category-list">
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                </ul>
            </div>
        </section>
    )
}

export default Category