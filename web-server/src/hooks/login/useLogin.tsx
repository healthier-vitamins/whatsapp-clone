import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { IContact } from '../../../../shared/types/responses/contacts'
import customHistory from '../../components/router/CustomHistory'
import allRoutes from '../../utilities/routes.utility'

export default function useLogin() {
    // -- Hooks
    const [cookies, setCookie] = useCookies(['token'])

    // -- Use Effect
    useEffect(() => {
        if (cookies.token) customHistory.push(allRoutes.CHATS.url)
    }, [cookies.token])

    // -- Functions
    function onClick(selectedUser: IContact | undefined) {
        setCookie('token', selectedUser)
    }

    return {
        onClick: onClick,
        loggedInUser: cookies.token as IContact
    }
}
