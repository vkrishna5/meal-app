import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNavbar from '../components/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Search from '../pages/Search'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import Category from '../pages/Category'
import Product from '../pages/Product'
import Admin from '../pages/Admin'
import ProtectedRoute from './ProtectedRoute'

const RouteConfiguration = () => {
    return (
        <>
            <BrowserRouter>
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Order />} />
                    <Route path="/category/:categoryName" element={<Category />} />
                    <Route path="/meal/:productId" element={<Product />} />
                    <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteConfiguration