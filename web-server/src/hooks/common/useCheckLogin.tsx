import { useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks'
import customHistory from '../../components/router/CustomHistory'
import allRoutes from '../../utilities/routes.utility'

export default function useCheckLogin() {
    // -- Redux
    const authenticationSelector = useAppSelector(
        (state) => state.authentication
    )
    const miscSelector = useAppSelector((state) => state.misc)

    // -- Use Effect
    useEffect(() => {
        console.log('inside?1 ')
        if (
            !authenticationSelector.loggedInUser?.id ||
            !authenticationSelector.loggedInUser
        )
            customHistory.push(allRoutes.LOGIN.url)
    }, [
        authenticationSelector.loggedInUser?.id,
        miscSelector.topNavButtonState,
        miscSelector.rightPageChat
    ])
}
