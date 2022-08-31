import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
// import cookie from 'cookie'

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
            <Route path="/user" element={<User />} />
        </Routes>
    )
}

export default Router