import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Container } from 'react-bootstrap'
import { Button, Card } from '@mui/material'
import Heading from '../components/Heading'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const Login = () => {
    const { login } = useContext(AuthContext)
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()
    const navigateToAdmin = () => {
        navigate('/admin')
    }
    return (
        <Container>
            <Card className='m-4 p-3'>
                <Container>
                    <Heading title="Admin Login" />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Button variant='contained' onClick={() => {
                        if (username === "admin" && password === "password") {
                            setUsername('')
                            setPassword('')
                            login()
                            navigateToAdmin()
                        } else {
                            swal("Oops!", "Incorrect username or password!", "error")
                        }
                    }}>Submit</Button>
                </Container>
            </Card>
        </Container>
    )
}

export default Login