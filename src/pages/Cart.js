import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Container, Row } from 'react-bootstrap'
import Heading from '../components/Heading'
import CartCard from '../components/CartCard'
import { OrderContext } from '../context/OrderContext'
import { Button } from '@mui/material'
import swal from 'sweetalert'

const Cart = () => {
    const { cart, removeFromCart, emptyCart } = useContext(CartContext)
    const { placeOrder } = useContext(OrderContext)

    const grandTotal = cart.reduce(
        (total, item) => Number(total) + Number(item.price),
        0
    );

    return (
        <Container>
            <Heading title="Cart" />
            <Row className="my-2">
                {cart.map((meal) => <CartCard meal={meal} removeFromCart={removeFromCart} />)}
            </Row>
            <Row className="my-2">
                <div className='col-md-2 offset-10 lead'><b>Cart Total : ₹ {grandTotal}</b></div>
            </Row>
            <Row className="mb-3">
                <Button variant='contained' onClick={() => {
                    placeOrder({ id: Math.floor(Math.random() * (10000 - 1000)) + 1000, meals: cart, price: grandTotal })
                    emptyCart()
                    swal("Success", "Order placed!");
                }}>Place Order</Button>
            </Row>
        </Container>
    )
}

export default Cart