import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Button, CardActionArea } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { MealContext } from '../context/MealContext';
import { Row } from 'react-bootstrap';
import swal from 'sweetalert';


const MealCard = (props) => {
    let meal = props.meal
    const { addToCart } = useContext(CartContext)
    const { meals } = useContext(MealContext);
    let [mealPrice, setMealPrice] = useState(0)

    useEffect(() => {
        let getMeal = meals.find(o => o.idMeal === meal.idMeal);
        if (getMeal !== undefined) {
            setMealPrice(getMeal.price)
        }
    }, [meals, meal])


    return (
        <>
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <Link to={`/meal/${meal.idMeal}`} style={{ textDecoration: 'none' }}>
                        <CardMedia component="img" height="140" image={meal.strMealThumb} alt="food category" />
                    </Link>
                    <CardContent>
                        <Link to={`/meal/${meal.idMeal}`} style={{ textDecoration: 'none' }}>
                            <Typography gutterBottom variant="h5" component="div" className="text-black">
                                <b>{meal.strMeal.substring(0, 45)}</b>
                            </Typography>
                        </Link>
                        <Row>
                            <div class="d-flex justify-content-between">
                                <p className='lead'>₹ {mealPrice}</p>
                                {mealPrice > 0 ? <Button variant="outlined" onClick={() => {
                                    addToCart(meal, mealPrice)
                                    swal("Success", "Meal added to cart!", "success");
                                }}>Add to cart</Button> :
                                    <Alert severity="info">Out of stock</Alert>}
                            </div>
                        </Row>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}

export default MealCard



