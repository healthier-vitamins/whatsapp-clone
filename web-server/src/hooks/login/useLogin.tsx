import { useNavigate } from 'react-router-dom'
import { IContact } from '../../../../shared/types/responses/contacts'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import reducerAuthentication from '../../redux/reducers/authentication.reducer'
import allRoutes from '../../utilities/routes.utility'
import { useEffect } from 'react'

export default function useLogin() {
    // -- Location
    const navigate = useNavigate()

    // -- Redux
    const dispatch = useAppDispatch()
    const { loggedInUser } = useAppSelector((state) => state.authentication)

    // -- Use Effect
    useEffect(() => {
        if (loggedInUser) navigate(allRoutes.CHATS.url)
    }, [loggedInUser])

    // -- Functions
    function onClick(selectedUser: IContact | undefined) {
        dispatch(reducerAuthentication.setLoggedInUser(selectedUser))
    }

    return {
        onClick: onClick
    }
}
