import React, { useContext } from "react";
import { CartContext } from "../../context/CardProvider";
import { Link } from "react-router-dom";

const ProductItem = ({ product, setCartItems }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const filteredData = cartItems.find((item) => item.id === product.id);

  return (
    <li className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="/">
          <img src={product.img.singleImage} alt="" className="img1" />
          <img src={product.img.thumbs[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {product.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">${product.price.newPrice}</strong>
          <span className="old-price">${product.price.oldPrice}</span>
        </div>
        <span className="product-discount">-{product.discount}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() => addToCart(product)}
            disabled={filteredData}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link to={`/product/${product.id}`} className="product-link">
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="/">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
