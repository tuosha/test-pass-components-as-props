import { Link, Outlet } from 'react-router-dom'
import classes from './App.module.scss'
import '../../styles/index.scss'

const App = () => {
    return (
        <div className={`${classes.appRouter} app`}>
            <Link to={'/item-list'}>Item List</Link>
            <Link to={'/set-interval-use-effect'}>Set Interval with useEffect</Link>
            <Link to={'/state-as-object'}>State as object</Link>
            <Link to={'/change-div-color-by-input'}>Change div color by input</Link>
            <Link to={'/children-as-props'}>Children as props</Link>
            <Link to={'/lazy-loading'}>Lazy loading</Link>
            <Outlet />
        </div>
    )
}

export default App
