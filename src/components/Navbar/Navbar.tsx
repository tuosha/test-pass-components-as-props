import { classNames } from '../../helpers/classNames'
import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Link to={'/item-list'}>Item List</Link>
            <Link to={'/set-interval-use-effect'}>Set Interval with useEffect</Link>
            <Link to={'/state-as-object'}>State as object</Link>
            <Link to={'/change-div-color-by-input'}>Change div color by input</Link>
            <Link to={'/children-as-props'}>Children as props</Link>
            <Link to={'/lazy-loading'}>Lazy loading</Link>
            <Link to={'/use-effect-use-layout'}>useEffect & useLayout</Link>
            <Link to={'/closure-timeout'}>Closure in Timeout</Link>
            <Link to={'/test-redux-cash'}>Test Redux</Link>
        </div>
    )
}

export default Navbar
