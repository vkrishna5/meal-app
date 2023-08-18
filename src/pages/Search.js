import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import MealCard from '../components/MealCard'

const Search = () => {
    const [params] = useSearchParams()
    let query = params.get('query')
    let [meals, setMeals] = useState([])
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then(res => {
            let data = res.data
            setMeals(data.meals)
        })
    }, [query])
    return (
        <Container>
            <Row>
                <h1>Search Results: {query}</h1>
                <hr />
            </Row>
            <Row className="my-2">
                {meals.map((meal) => <Col xs={3} className="p-2"><MealCard meal={meal} /></Col>)}
            </Row>
        </Container>
    )
}

export default Search