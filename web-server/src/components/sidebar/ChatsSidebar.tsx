import ChipsNav from './ChipsNav'
import CoreSearchBar from '../common/search-bar/CoreSearchBar'
import TopNav from './TopNav'
import ChatsContainer from './chat/Index'

export default function ChatSidebar() {
    return (
        <div className="flex-col ">
            <TopNav />
            <CoreSearchBar placeholderText="Search" />
            <ChipsNav />
            <ChatsContainer />
        </div>
    )
}
