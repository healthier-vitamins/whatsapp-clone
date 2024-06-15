import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import allRoutes from '../../utilities/routes.utility'
import customHistory from '../../components/router/CustomHistory'

export default function useDefaultUrl(dependencies = []) {
    // -- Location
    const location = useLocation()

    // -- Use Effects
    useEffect(() => {
        if (location.pathname === '/') customHistory.push(allRoutes.CHATS.url)
    }, [location.pathname])
}
