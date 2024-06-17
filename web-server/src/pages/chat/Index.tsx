import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useAppSelector } from '../../redux/hooks'
import SmileyIconSvg from '../../svgs/SmileyIconSvg'
import PlusIconSvg from '../../svgs/PlusIconSvg'
import CorePrimarySearchBar from '../../components/common/search-bar/CorePrimarySearchBar'

export default function ChatPage() {
    // -- Redux
    const miscSelector = useAppSelector((state) => state.misc)

    return (
        <div className="flex h-full w-full flex-col items-center ">
            <div className="bg-primary-header-background flex h-[59px] w-full border-l-[1px] border-l-[rgb(209,215,219)] px-4 py-[10px]">
                <UserCircleIcon className="  mr-[15px] h-10 w-10 text-gray-300" />
                <div className="flex h-full w-full items-center text-primary-font-color">
                    {miscSelector.rightPageChat?.username}
                </div>
            </div>
            <div className="bg-chat-background-img w-full flex-grow bg-contain  "></div>
            <div className="bg-primary-header-background flex h-[62px] w-full items-center px-4 py-[5px]">
                <div className="px-3">
                    <SmileyIconSvg className="cursor-pointer" />
                </div>
                <div>
                    <PlusIconSvg className="cursor-pointer" />
                </div>
                <div className="ml-4 flex w-full items-center px-2 py-[5px]">
                    <CorePrimarySearchBar placeholderText="Type a message" />
                </div>
            </div>
        </div>
    )
}
