import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Container } from 'react-bootstrap'

const Logout = () => {
    const { logout } = useContext(AuthContext)
    return (
        <Container>
            <button onClick={logout}>Logout</button>
        </Container>
    )
}

export default Logout