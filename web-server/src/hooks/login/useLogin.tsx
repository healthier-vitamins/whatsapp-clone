import { useNavigate } from 'react-router-dom'
import { IContact } from '../../../../shared/types/responses/contacts'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import reducerAuthentication from '../../redux/reducers/authentication.reducer'
import allRoutes from '../../utilities/routes.utility'
import { useEffect } from 'react'
import customHistory from '../../components/router/CustomHistory'

export default function useLogin() {
    // -- Redux
    const dispatch = useAppDispatch()
    const { loggedInUser } = useAppSelector((state) => state.authentication)

    // -- Use Effect
    useEffect(() => {
        if (loggedInUser) customHistory.push(allRoutes.CHATS.url)
    }, [loggedInUser])

    // -- Functions
    function onClick(selectedUser: IContact | undefined) {
        dispatch(reducerAuthentication.setLoggedInUser(selectedUser))
    }

    return {
        onClick: onClick
    }
}
