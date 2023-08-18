import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Product = () => {
    const { productId } = useParams()
    let [meal, setMeal] = useState([])
    const { addToCart } = useContext(CartContext)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`).then(res => {
            let data = res.data
            setMeal(data.meals[0])
        })
    }, [productId])
    return (
        <Container>
            <Card sx={{ display: 'flex', width: "100%" }} className='my-4'>
                <CardMedia
                    component="img"
                    sx={{ width: "40%" }}
                    image={meal.strMealThumb}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            <b>{meal.strMeal}</b>
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Category: {meal.strCategory}
                        </Typography>
                        <Button variant="outlined" className="my-3" onClick={() => { addToCart(meal) }}>Add to cart</Button>

                        <Typography component="div">
                            How we make this: <br />
                            {meal.strInstructions}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Container>
    )
}

export default Product