import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const RouterErrorPage = () => {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return (
            <div id='error-page'>
                <h1>Sorry... something gonna wrong: </h1>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                <p>{error.data?.message && <p>{error.data.message}</p>}</p>
            </div>
        )
    } else {
        return <div>Oops</div>
    }
}

export default RouterErrorPage
