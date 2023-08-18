import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

const CartCard = (props) => {
    let meal = props.meal
    let removeFromCart = props.removeFromCart
    return (
        <>
            <Card sx={{ display: 'flex' }} className='my-1' >
                <CardMedia component="img" sx={{ width: 100 }} image={meal.strMealThumb} alt="Live from space album cover" />
                <CardContent sx={{ flex: '1 0 auto' }} className="my-auto">
                    <Typography component="div" variant="h6">
                        {meal.strMeal}
                    </Typography>
                </CardContent>
                <Box className="my-auto me-4 lead">
                    ₹{meal.price}
                </Box>
                <Box className="my-auto me-4">
                    <Button variant="outlined" color="error" onClick={() => {
                        removeFromCart(meal)
                        alert("Meal removed from cart!")
                    }}>Remove</Button>
                </Box>
            </Card >
        </>
    )
}

export default CartCard



