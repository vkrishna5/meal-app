import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../components/Heading'
import Banner from '../components/Banner'

const Home = () => {
    let [categories, setCategories] = useState([])


    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res => {
            let data = res.data
            // console.log(data.categories)
            setCategories(data.categories)
        })
    }, [])
    return (
        <Container>
            <Row>
                <Banner />
            </Row>
            <Row>
                <Heading title="Categories" />
            </Row>
            <Row className="my-2">
                {categories.map((category) => <Col xs={3} className="p-2"><CategoryCard category={category} /></Col>)}
            </Row>
        </Container>
    )
}

export default Home