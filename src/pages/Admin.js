import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../components/Heading'
import { MealContext } from '../context/MealContext'
import { Button, FormControl, TextField } from '@mui/material'

const Admin = () => {
    const { meals, setPrice } = useContext(MealContext);
    // useEffect(() => {
    //     console.log(meals);
    // }, [meals])

    let [mealId, setMealId] = useState('')
    let [priceEntry, setPriceEntry] = useState(0)
    return (
        <Container className='mb-4'>
            <Heading title="Admin Panel" />
            <Row>
                <Col>
                    <h2>Set Price of Meals</h2> <br />
                    <FormControl fullWidth>
                        <TextField label="Enter Meal ID" variant="outlined" value={mealId} onChange={(e) => setMealId(e.target.value)} /><br />
                        <TextField label="Enter Price" variant="outlined" value={priceEntry} onChange={(e) => setPriceEntry(e.target.value)} /> <br />
                        <Button variant="contained" onClick={() => {
                            setPrice(mealId, priceEntry)
                            setMealId('')
                            setPriceEntry(0)
                            alert("Price of meal changed!")
                        }}>Set Price</Button>
                    </FormControl>
                </Col>
                <Col>
                    <h2>Meal Prices</h2> <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Meal ID</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meals.map((meal) => <tr>
                                <td>{meal.idMeal}</td>
                                <td>{meal.price}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </Col>

            </Row>

        </Container>
    )
}

export default Admin