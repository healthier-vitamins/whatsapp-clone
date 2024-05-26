import ChipsNav from './ChipsNav'
import SearchBar from './SearchBar'
import TopNav from './TopNav'

export default function Sidebar() {
    return (
        <div className="flex-col ">
            <TopNav />
            <SearchBar />
            <ChipsNav />
        </div>
    )
}
