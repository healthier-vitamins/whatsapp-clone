import { useEffect } from 'react'
import useChangeTitle from '../../../hooks/common/useChangeTitle'
import useDefaultUrl from '../../../hooks/common/useDefaultUrl'
import customHistory from '../../CustomHistory'

export default function UnProtectedWrapper({
    pageTitle,
    children
}: {
    pageTitle?: string
    children: React.ReactNode
}) {
    useChangeTitle(pageTitle, [])
    useDefaultUrl()

    return <>{children}</>
}
