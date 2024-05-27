import ChipsNav from './ChipsNav'
import SearchBar from './SearchBar'
import TopNav from './TopNav'
import ChatsContainer from './chat/ChatsContainer'

export default function SidebarContainer() {
    return (
        <div className="flex-col ">
            <TopNav />
            <SearchBar />
            <ChipsNav />
            <ChatsContainer />
        </div>
    )
}
