import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import SignUp from './pages/Auth/SignUp';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/auth' element={<Auth />} />
                <Route exact path='/sign-up' element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
