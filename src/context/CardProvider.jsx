import { createContext, useEffect, useState } from "react";
export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    )
    const [isLogged, setIsLogged] = useState(
        localStorage.getItem('user') ? true : false
    )
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (myproduct) => {
        setCartItems((prev) => [...prev, {
            ...myproduct, quantity: myproduct.quantity ? myproduct.quantity : 1
        }])
    }

    const removeCart = (itemId) => {
        const filteredDate = cartItems.filter((item) => { return item.id !== itemId })
        setCartItems(filteredDate)
    }


    const initialStates = {
        cartItems,
        addToCart,
        removeCart,
        isLogged,
        setIsLogged
    }

    return (
        <CartContext.Provider value={initialStates}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider