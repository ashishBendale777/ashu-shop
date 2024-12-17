import React from 'react'
import MyAppBar from './MyAppBar'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Cart from './Cart'
import Profile from './Profile'
import { ProdDetails } from './ProdDetails'

const MyRoutes = () => {
    return (
        <>
            <MyAppBar />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/proddetails' element={<ProdDetails />} />
            </Routes>
        </>
    )
}

export default MyRoutes