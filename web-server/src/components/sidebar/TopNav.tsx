import { UserCircleIcon } from '@heroicons/react/24/solid'
import useChangeTopNavButtonState from '../../hooks/common/useChangeTopNavButtonState'
import Channel from '../../svgs/Channel'
import CommunityGroup from '../../svgs/CommunityGroup'
import Ellipsis from '../../svgs/Ellipsis'
import NewChat from '../../svgs/NewChat'
import Status from '../../svgs/Status'
const BUTTON_CLASS = 'flex h-10 w-10 cursor-pointer items-center justify-center'

export default function TopNav() {
    // -- Hooks
    const changeTopNavButton = useChangeTopNavButtonState()

    return (
        <div className="flex h-[59px] max-w-full border-r-[1px] border-r-[#e9edef] bg-[#f0f2f5] px-4 py-[10px]">
            <UserCircleIcon className="h-10 w-10 cursor-pointer text-gray-300" />
            <div className="ml-auto flex items-center gap-[10px]">
                <div className={BUTTON_CLASS}>
                    <img
                        src="https://static.whatsapp.net/rsrc.php/v3/ye/r/W2MDyeo0zkf.png"
                        className="max-h-6 max-w-6"
                    />
                </div>
                <div className={BUTTON_CLASS}>
                    <CommunityGroup />
                </div>
                <div className={BUTTON_CLASS}>
                    <Status />
                </div>
                <div className={BUTTON_CLASS}>
                    <Channel />
                </div>
                <div
                    className={BUTTON_CLASS}
                    onClick={() => {
                        changeTopNavButton.onClick('NEW_CHAT')
                    }}
                >
                    <NewChat />
                </div>
                <div className={BUTTON_CLASS}>
                    <Ellipsis />
                </div>
            </div>
        </div>
    )
}
