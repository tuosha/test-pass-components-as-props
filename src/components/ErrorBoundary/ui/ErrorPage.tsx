import cls from './ErrorPage.module.scss'
import { classNames } from '../../../helpers/classNames'

interface ErrorPageProps {
    className?: string
}

const ErrorPage = ({ className }: ErrorPageProps) => {
    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <h1>Something goes wrong...</h1>
            <button onClick={() => location.reload()}>Reload</button>
        </div>
    )
}

export default ErrorPage
