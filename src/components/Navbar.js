import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { AuthContext } from '../context/AuthContext';

function MyNavbar() {
    let [text, setText] = useState('')
    let { authenticated, logout } = useContext(AuthContext)
    let navigate = useNavigate()
    const navigateToSearch = (e) => {
        e.preventDefault()
        setText('')
        if (text.length > 0 && Number.isNaN(Number(text)) && !/\d/.test(text)) {
            navigate(`/search?query=${text}`)
        }
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">DishDash</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/cart">Cart</Link>
                        <Link className="nav-link" to="/orders">Orders</Link>
                        {authenticated ? <Link className="nav-link" onClick={logout}>Logout</Link> : <></>}

                        <Link className="nav-link" to="/admin">Admin</Link>
                    </Nav>
                    <form className='d-flex' onSubmit={navigateToSearch}>
                        <div className=' justify-content-start'>
                            <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
                        </div>
                        <div className=' justify-content-end'>
                            <button type="submit" className='btn btn-warning' >
                                <BsSearch />
                            </button>
                        </div>
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default MyNavbar;