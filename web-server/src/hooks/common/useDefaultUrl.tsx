import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import customHistory from '../../components/router/CustomHistory'
import allRoutes from '../../utilities/routes.utility'

export default function useDefaultUrl(dependencies = []) {
    // -- Location
    const location = useLocation()

    // -- Use Effects
    useEffect(() => {
        console.log(location.pathname)
        if (location.pathname === '/') customHistory.push(allRoutes.LOGIN.url)
    }, [location.pathname])
}
