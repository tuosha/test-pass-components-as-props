import { createBrowserRouter } from 'react-router-dom'
import App from '../../App/App'
import RouterErrorPage from '../RouterErrorPage/RouterErrorPage'
import booksData from '../../Data/booksData'

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RouterErrorPage />,
        children: [
            {
                path: '/item-list',
                lazy: async () => {
                    const ItemList = (await import('../../TestComponents/ItemList/ItemList')).default
                    return {
                        element: <ItemList data={booksData} />,
                    }
                },
            },
            {
                path: '/state-as-object',
                lazy: async () => {
                    const StateAsObject = (await import('../../TestComponents/StateAsObject/StateAsObject')).default
                    return {
                        element: <StateAsObject />,
                    }
                },
            },
            {
                path: '/set-interval-use-effect',
                lazy: async () => {
                    const SetIntervalUseEffect = (
                        await import('../../TestComponents/SetIntervalUseEffect/SetIntervalUseEffect')
                    ).default
                    return {
                        element: <SetIntervalUseEffect />,
                    }
                },
            },
            {
                path: '/change-div-color-by-input',
                lazy: async () => {
                    const ChangeDivColorByInput = (
                        await import('../../TestComponents/ChangeDivColorByInput/ChangeDivColorByInput')
                    ).default
                    return {
                        element: <ChangeDivColorByInput />,
                    }
                },
            },
            {
                path: '/children-as-props',
                lazy: async () => {
                    const MainComponent = (await import('../../TestComponents/ChildrensAsProps/MainComponent')).default
                    return {
                        element: <MainComponent />,
                    }
                },
            },
        ],
    },
])

export default mainRouter
