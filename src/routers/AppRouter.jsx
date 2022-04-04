import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboarRoutes } from './DashboarRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {

    return (
        <BrowserRouter>

            <Routes>
                {/* <PublicRoutes isAuthenticated={user.logged} component={<LoginScreen />}  /> */}
                {/* <Route path='login' element={<LoginScreen />} /> */}
                <Route
                    path='/login'
                    element={
                        <PublicRoutes>
                            <LoginScreen />
                        </PublicRoutes>
                    }
                />

                <Route
                    path='/*'
                    element={
                        <PrivateRoutes>
                            <DashboarRoutes />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
