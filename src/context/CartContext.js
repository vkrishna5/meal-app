import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ ...props }) => {
    const [cart, setCart] = useState([])
    const addToCart = (meal, mealPrice) => {
        setCart([...cart, { ...meal, price: mealPrice }])
    }
    const removeFromCart = (meal) => {
        setCart(cart.filter((x) => x !== meal))
    }
    const emptyCart = () => {
        setCart([])
    }
    return <CartContext.Provider value={{ addToCart, removeFromCart, emptyCart, cart }} {...props} />
}
