import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import { Container, Row } from 'react-bootstrap'
import Heading from '../components/Heading'
import OrderCard from '../components/OrderCard'

const Order = () => {
    const { orders } = useContext(OrderContext)

    return (
        <Container className='mb-5'>
            <Heading title="Orders" />
            <Row className="my-2">
                {orders.map((order) => <OrderCard order={order} />)}
            </Row>
        </Container>
    )
}

export default Order