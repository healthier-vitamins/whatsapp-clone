import useChangeTopNavButtonState from '../../../hooks/common/useChangeTopNavButtonState'
import BackButtonSvg from '../../../svgs/BackButtonSvg'
import SearchBar from '../../common/search-bar/SearchBar'
import ContactsContainer from './contacts/Index'

export default function NewChatSidebar() {
    // -- Hooks
    const changeTopNavButton = useChangeTopNavButtonState()

    return (
        <div className="flex w-full flex-col">
            <div className="flex h-[108px] flex-col justify-end bg-[#008069]">
                <div className="flex items-center pb-4 pl-[23px]">
                    <BackButtonSvg
                        className="cursor-pointer"
                        onClick={() => changeTopNavButton.onClick(undefined)}
                    />
                    <span className="ml-6 text-[19px] font-medium text-white">
                        New Chat
                    </span>
                </div>
            </div>
            <SearchBar placeholderText="Search name or number" />
            <ContactsContainer />
        </div>
    )
}
