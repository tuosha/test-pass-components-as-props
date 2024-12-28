import { createBrowserRouter } from 'react-router-dom'
import App from '../../components/App/App'
import booksData from '../../components/Data/booksData'
import Loadable from '../../components/LazyComponentLoading/Loadable'
import LazyComponentLoading from '../../components/LazyComponentLoading/LazyComponentLoading'
import RouterErrorPage from '../RouterErrorPage/RouterErrorPage'
import UseEffectAndLayoutHooks from '../../components/useHooks/useEffectAndLayoutHooks/useEffectAndLayoutHooks'
import ClosureTimeout from '../../components/ClosureTimeout/ClosureTimeout';

const LazyElem = Loadable(LazyComponentLoading)

const mainPageRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RouterErrorPage />,
        children: [
            {
                path: '/item-list',
                lazy: async () => {
                    const ItemList = (await import('../../components/ItemList/ItemList')).default
                    return {
                        element: <ItemList data={booksData} />,
                    }
                },
            },
            {
                path: '/state-as-object',
                lazy: async () => {
                    const StateAsObject = (await import('../../components/StateAsObject/StateAsObject')).default
                    return {
                        element: <StateAsObject />,
                    }
                },
            },
            {
                path: '/set-interval-use-effect',
                lazy: async () => {
                    const SetIntervalUseEffect = (
                        await import('../../components/SetIntervalUseEffect/SetIntervalUseEffect')
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
                        await import('../../components/ChangeDivColorByInput/ChangeDivColorByInput')
                    ).default
                    return {
                        element: <ChangeDivColorByInput />,
                    }
                },
            },
            {
                path: '/children-as-props',
                lazy: async () => {
                    const MainComponent = (await import('../../components/ChildrensAsProps/MainComponent')).default
                    return {
                        element: <MainComponent />,
                    }
                },
            },
            {
                path: '/lazy-loading',
                element: <LazyElem />,
            },
            {
                path: '/use-effect-use-layout',
                element: <UseEffectAndLayoutHooks />,
            },
            {
                path: '/closure-timeout',
                element: <ClosureTimeout />,
            },
        ],
    },
])

export default mainPageRouter
