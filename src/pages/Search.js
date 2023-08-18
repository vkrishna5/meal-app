import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import MealCard from '../components/MealCard'
import Heading from '../components/Heading'

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
                <Heading title={`Search Results: ${query}`} />
            </Row>
            <Row className="my-2">
                {meals && meals.length > 0 ?
                    meals.map((meal) => <Col xs={3} className="p-2"><MealCard meal={meal} /></Col>) :
                    <p>No Results Found!</p>
                }
            </Row>
        </Container>
    )
}

export default Search