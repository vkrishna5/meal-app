import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const OrderCard = (props) => {
    const order = props.order
    return (
        <>
            <Card sx={{ display: 'flex' }} className='my-1' >
                <Box className="my-auto me-4 lead">
                    Order ID: #{order.id}
                </Box>
                <CardContent sx={{ flex: '1 0 auto' }} className="my-auto">
                    <Typography component="div" variant="h6">
                        {order.meals.map((meal) => <span>{meal.strMeal}, </span>)}
                    </Typography>
                </CardContent>
                <Box className="my-auto me-4 lead">
                    Order total: ₹{order.price}
                </Box>

            </Card >
        </>
    )
}

export default OrderCard