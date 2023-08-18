import { createContext, useState } from "react";

export const OrderContext = createContext()

export const OrderProvider = ({ ...props }) => {
    const [orders, setOrders] = useState([])
    const placeOrder = (order) => {
        setOrders([...orders, order])
    }
    return <OrderContext.Provider value={{ placeOrder, orders }} {...props} />
}
