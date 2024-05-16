import { useEffect } from 'react'
import allRoutes from '../../../utilities/routes.utility'

export default function ProtectedWrapper({
    pageTitle,
    children
}: {
    pageTitle?: string
    children: React.ReactNode
}) {
    useEffect(() => {
        let title = allRoutes.DEFAULT.pageTitle
        if (pageTitle) title = pageTitle
        document.title = title
    }, [])

    return <>{children}</>
}
