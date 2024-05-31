import useHistory from '../../hooks/common/useHistory'
import { useAppSelector } from '../../redux/hooks'
import ChatSidebar from './ChatsSidebar'
import NewChatSidebar from './new-chat/NewChatSidebar'

export default function SidebarContainer() {
    // -- Redux
    const miscSelector = useAppSelector((state) => state.misc)

    useHistory()

    if (!miscSelector.topNavButtonState) {
        return <ChatSidebar />
    } else if (miscSelector.topNavButtonState === 'NEW_CHAT') {
        return <NewChatSidebar />
    }
}
