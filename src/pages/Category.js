import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from '../components/MealCard'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../components/Heading'

const Category = () => {
    const { categoryName } = useParams()

    let [meals, setMeals] = useState([])
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`).then(res => {
            let data = res.data
            // console.log(data.meals)
            setMeals(data.meals)
        })
    }, [categoryName])
    return (
        <Container>
            <Row>
                <Heading title={categoryName} />
            </Row>
            <Row className="my-2">
                {meals.map((meal) => <Col xs={3} className="p-2"><MealCard meal={meal} /></Col>)}
            </Row>
        </Container>
    )
}

export default Category