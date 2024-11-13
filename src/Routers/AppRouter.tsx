import React from 'react'
import { RouterProvider } from 'react-router-dom'
import mainRouter from './MainRouter/mainRouter'

const AppRouter = () => <RouterProvider router={mainRouter} />

export default AppRouter
