import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import allRoutes from '../../utilities/routes.utility'

export default function useDefaultUrl(dependencies = []) {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/') navigate(allRoutes.CHATS.url)
    }, [location.pathname])
}
