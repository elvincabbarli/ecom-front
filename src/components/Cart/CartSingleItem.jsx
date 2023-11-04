import React, { useContext } from 'react'
import { CartContext } from '../../context/CardProvider'

const CartSingleItem = ({ item }) => {
    const { removeCart } = useContext(CartContext)
    return (
        <tr className="cart-item">
            <td></td>
            <td className="cart-image">
                <img src={item.img.singleImage} alt="" />
                <i onClick={() => (removeCart(item.id))} className="bi bi-x delete-cart" ></i>
            </td>
            <td>{item.name}</td>
            <td>${item.price.newPrice.toFixed(2)}</td>
            <td className="product-quantity">{item.quantity}</td>
            <td className="product-subtotal">${(item.price.newPrice*item.quantity).toFixed(2)}</td>
        </tr>
    )
}

export default CartSingleItem