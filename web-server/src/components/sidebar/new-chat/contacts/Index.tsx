import { useAppSelector } from '../../../../redux/hooks'
import apiContacts from '../../../../rtk-query/api/contacts.api'

export default function ContactsContainer() {
    // -- Redux
    const authenticationSelector = useAppSelector(
        (state) => state.authentication
    )

    const { data, error } = apiContacts.useGetAllQuery(
        { id: authenticationSelector.loggedInUser?.id },
        {
            pollingInterval: 600000
        }
    )

    console.log(data)
    return <div className="flex-col"></div>
}
