import { useRouteError } from 'react-router-dom'
import { isDevelopment } from '../../utilities/env.utility'

export default function ErrorPage() {
    const error: any = useRouteError()

    function renderErrorInfo() {
        if (!error) return

        if (isDevelopment()) return error?.statusText || error?.message || ''
    }

    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{renderErrorInfo()}</i>
            </p>
        </div>
    )
}
