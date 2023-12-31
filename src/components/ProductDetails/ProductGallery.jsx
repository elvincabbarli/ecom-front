import React, { useState } from 'react'
import productData from '../../data.json'
import Slider from "react-slick";

const ProductGallery = () => {
    const [activeImage, setActiveImage] = useState({
        img: productData[0].img.singleImage,
        imgIndex: 0
    })


    function NextBtn({ onClick }) {
        return (
            <button className="glide__arrow glide__arrow--right" style={{ zIndex: '2' }} data-glide-dir=">" onClick={onClick}>
                <i className="bi bi-chevron-right"></i>
            </button>
        )
    }


    function PrevBtn({ onClick }) {
        return (
            <button style={{ zIndex: '2' }} className="glide__arrow glide__arrow--left" data-glide-dir="<" onClick={onClick}>
                <i className="bi bi-chevron-left"></i>
            </button>
        )
    }

    const sliderSetting2 = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        <div className="product-gallery">
            <div className="single-image-wrapper">
                <img src={`/${activeImage.img}`} id="single-image" alt="" />
            </div>
            <div className="product-thumb">
                <div className="glide__track" data-glide-el="track">
                    <ol class="gallery-thumbs glide__slides" >
                        <Slider {...sliderSetting2}>
                            {
                                productData[0].img.thumbs.map((item, index) =>
                                    <li class="glide__slide glide__slide--active" key={index} onClick={() => setActiveImage({
                                        img: item,
                                        imgIndex: index
                                    })}>
                                        <img src={`/${item}`} alt="" class={`img-fluid ${activeImage.imgIndex === index ? 'active' : ''}`} />
                                    </li>
                                )
                            }
                        </Slider>
                    </ol>
                </div>
                <div className="glide__arrows" data-glide-el="controls"></div>
            </div>
        </div>
    )
}

export default ProductGallery