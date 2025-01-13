import { Outlet } from 'react-router-dom'
import cls from './App.module.scss'
import '../../styles/index.scss'
import Navbar from '../Navbar/Navbar'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { ErrorButton } from '../ErrorBoundary/ui/ErrorButton'

const App = () => {
    return (
        <ErrorBoundary>
            <ErrorButton />
            <div className={`${cls.app} app`}>
                <Navbar />
                <div className={cls.appContent}>
                    <Outlet />
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default App
