import React, { useState } from 'react'
import './Product.css'
import ProductItem from './ProductItem'
import ProductJson from '../../data.json'
import Slider from "react-slick";

const Products = () => {
    const [products] = useState(ProductJson)

    function NextBtn({ onClick }) {
        return (
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">" onClick={onClick}>
                <i class="bi bi-chevron-right"></i>
            </button>
        )
    }


    function PrevBtn({ onClick }) {
        return (
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<" onClick={onClick}>
                <i class="bi bi-chevron-left"></i>
            </button>
        )
    }

    const sliderSetting = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <section class="products">
            <div class="container">
                <div class="section-title">
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Morden Design</p>
                </div>
                <div class="product-wrapper product-carousel">
                    <Slider {...sliderSetting}>
                        {products.map((product) =>
                            <ProductItem product={product} key={product.id}  />
                        )}
                    </Slider>
                    <div class="glide__arrows" data-glide-el="controls">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products