import { useRouteError } from 'react-router-dom'
import { isDevelopment } from '../../utilities/env.utility'

export default function ErrorPage() {
    const error: any = useRouteError()

    function renderErrorInfo() {
        if (!error) return
        console.log('error: ', error)
        if (isDevelopment()) return error?.statusText || error?.message || ''
    }

    return (
        <div className="flex h-dvh w-screen flex-col items-center justify-center">
            <h1 className="mb-1 text-4xl font-medium">Oops!</h1>
            <span className="text-base">
                Sorry, an unexpected error has occurred.
            </span>
            <span>{renderErrorInfo()}</span>

            {/* <div className="relative flex h-screen items-center justify-center">
                <div className="group relative">
                    <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                        Hover me
                    </button>
                    <div className="  absolute bottom-full mb-2 hidden w-auto rounded-lg bg-black p-2 text-sm text-white shadow-md group-hover:block">
                        This is a tooltip
                    </div>
                </div>
            </div> */}
        </div>
    )
}
