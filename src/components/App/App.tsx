import { Outlet } from 'react-router-dom'
import cls from './App.module.scss'
import '../../styles/index.scss'
import Nabvar from '../Navbar/Navbar'

const App = () => {
    return (
        <div className={`${cls.app} app`}>
            <Nabvar />
            <div className={cls.appContent}>
                <Outlet />
            </div>
        </div>
    )
}

export default App
