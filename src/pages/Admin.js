import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../components/Heading'
import { MealContext } from '../context/MealContext'
import { Button, FormControl, TextField } from '@mui/material'
import swal from 'sweetalert'

const Admin = () => {
    const { meals, setPrice } = useContext(MealContext);

    let [mealId, setMealId] = useState(0)
    let [priceEntry, setPriceEntry] = useState(0)
    return (
        <Container className='mb-4'>
            <Heading title="Admin Panel" />
            <Row>
                <Col>
                    <h2>Set Price of Meals</h2> <br />
                    <FormControl fullWidth>
                        <TextField type="number" label="Enter Meal ID" variant="outlined" value={mealId} onChange={(e) => setMealId(e.target.value)} /><br />
                        <TextField type="number" label="Enter Price" variant="outlined" value={priceEntry} onChange={(e) => setPriceEntry(e.target.value)} /> <br />
                        <Button variant="contained" onClick={() => {
                            if (Number(mealId) === 0 || Number(priceEntry) === 0) {
                                setMealId(0)
                                setPriceEntry(0)
                                swal("Oops!", "Meal ID and Price must be valid numbers!", "error")
                            } else {
                                setPrice(mealId, priceEntry)
                                setMealId(0)
                                setPriceEntry(0)
                                swal("Success", "Price of meal changed!", "success")
                            }
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