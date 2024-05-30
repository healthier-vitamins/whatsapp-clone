import NotificationBar from './NotificationBar'
import SingularChatTab from './SingularChatTab'

export default function ChatsContainer() {
    return (
        <div className="flex-col">
            <NotificationBar />

            <SingularChatTab />
            <SingularChatTab />
        </div>
    )
}
