import useChangeTopNavButtonState from '../../../../hooks/common/useChangeTopNavButtonState'
import useLogin from '../../../../hooks/login/useLogin'
import { useAppDispatch } from '../../../../redux/hooks'
import reducerMisc from '../../../../redux/reducers/misc.reducer'
import apiContacts from '../../../../rtk-query/api/contacts.api'
import CoreTab from '../../../common/tab/CoreTab'
import Divider from '../../Divider'
import GroupTab from './GroupTab'

export default function ContactsContainer() {
    // -- Redux
    const dispatch = useAppDispatch()

    // -- Hooks
    const { loggedInUser } = useLogin()
    const changeTopNavButton = useChangeTopNavButtonState()

    const { data, error } = apiContacts.useGetAllQuery(
        { id: loggedInUser?.id },
        {
            pollingInterval: 600000
        }
    )

    console.log(data)

    // -- Functions
    function renderContacts() {
        return data?.map((contact) => {
            return (
                <>
                    <CoreTab
                        primaryText={contact.username}
                        secondaryText={contact.status}
                        option={contact}
                        onClick={(selectedOption) => {
                            dispatch(
                                reducerMisc.setRightPageChat(selectedOption)
                            )
                            dispatch(
                                reducerMisc.setLeftPageSelectedChat(
                                    selectedOption
                                )
                            )
                            changeTopNavButton.onClick('DEFAULT')
                        }}
                    />
                    <Divider />
                </>
            )
        })
    }

    return (
        <div className="flex-col">
            <GroupTab text="New group" type="COMMUNITY_GRP" />
            <Divider />
            <GroupTab text="New Community" type="GRP" />
            <Divider />

            <div className=" h-[72px]  bg-white py-[30px] pl-8">
                <span className="text-primary-background  text-base font-normal">
                    CONTACTS ON WHATSAPP
                </span>
            </div>
            <Divider />
            {renderContacts()}
        </div>
    )
}
