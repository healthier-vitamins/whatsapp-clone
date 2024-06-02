import ChipsNav from './ChipsNav'
import SearchBar from '../common/search-bar/SearchBar'
import TopNav from './TopNav'
import ChatsContainer from './chat/Index'

export default function ChatSidebar() {
    return (
        <div className="flex-col ">
            <TopNav />
            <SearchBar placeholderText="Search" />
            <ChipsNav />
            <ChatsContainer />
        </div>
    )
}
