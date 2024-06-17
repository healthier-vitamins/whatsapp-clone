import { useAppSelector } from '../../../redux/hooks'
import LockSvg from '../../../svgs/LockSvg'
import CoreTab from '../../common/tab/CoreTab'
import Divider from '../Divider'
import NotEncryptedFooter from '../NotEncryptedFooter'
import NotificationBar from './NotificationBar'

export default function ChatsContainer() {
    // -- Redux
    const miscSelector = useAppSelector((state) => state.misc)

    // -- Function

    function renderChatSidebar() {
        if (miscSelector.leftPageSelectedTab) {
            return (
                <>
                    <CoreTab
                        option={miscSelector.leftPageSelectedTab}
                        primaryText={miscSelector.leftPageSelectedTab.username}
                        isSelected={true}
                    />
                    <Divider />
                    <div className="w-full flex-grow bg-white" />
                    <NotEncryptedFooter />
                </>
            )
        }

        return (
            <div className="flex h-full w-full items-center justify-center">
                <span className="text-secondary-font-color text-sm  font-light">
                    No chats found :(
                </span>
            </div>
        )
    }

    return (
        <div className=" flex h-full w-full flex-col">
            <NotificationBar />
            <Divider />
            {renderChatSidebar()}
        </div>
    )
}
