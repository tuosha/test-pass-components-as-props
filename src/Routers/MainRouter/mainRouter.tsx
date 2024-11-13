import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../../App/App'
import RouterErrorPage from '../RouterErrorPage/RouterErrorPage'
import ItemList from '../../TestComponents/ItemList/ItemList'
import booksData from '../../Data/booksData'
import StateAsObject from '../../TestComponents/StateAsObject/StateAsObject'
import SetIntervalUseEffect from '../../TestComponents/SetIntervalUseEffect/SetIntervalUseEffect'
import ChangeDivColorByInput from '../../TestComponents/ChangeDivColorByInput/ChangeDivColorByInput'
import MainComponent from '../../TestComponents/ChildrensAsProps/MainComponent'

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RouterErrorPage />,
        children: [
            {
                path: '/item-list',
                element: <ItemList data={booksData} />,
            },
            {
                path: '/state-as-object',
                element: <StateAsObject />,
            },
            {
                path: '/set-interval-use-effect',
                element: <SetIntervalUseEffect />,
            },
            {
                path: '/change-div-color-by-input',
                element: <ChangeDivColorByInput />,
            },
            {
                path: '/children-as-props',
                element: <MainComponent />,
            },
        ],
    },
])

export default mainRouter
