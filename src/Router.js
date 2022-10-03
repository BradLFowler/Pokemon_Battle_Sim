import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
// import cookie from 'cookie'

import LoginOrSignup from './containers/LoginOrSignup'
import Signup from './components/Signup'
import Login from './containers/Login'
import Home from './containers/Home'
import User from './components/User'

// const checkAuth = () => {
//     const cookies = cookie.parse(document.cookie)
//     return cookies["loggedIn"] ? true : false
// }

// const ProtectedRoute = ({component: Component, ...rest}) => {
//     return (
//         checkAuth() === true ? <Component {...rest} /> : <Navigate to="login" />
//     )
// }

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginOrSignup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}

export default Router