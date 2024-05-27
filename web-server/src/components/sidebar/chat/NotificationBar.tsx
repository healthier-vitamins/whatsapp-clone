import ChevronRight from '../../../svgs/ChevronRight'
import DisabledNotification from '../../../svgs/DisabledNotification'
import WhiteCrossClose from '../../../svgs/WhiteCrossClose'

export default function NotificationBar() {
    return (
        <div className="flex h-[89px] items-center bg-[#53bdeb] pb-[14px] pl-[13px] pr-3 pt-[13px]">
            <DisabledNotification className="min-h-[49px] min-w-12 cursor-pointer" />
            <div className="ml-[15px] flex cursor-pointer flex-col items-start">
                <span className="text-base text-[#111b21]">
                    Turn on notifications
                </span>
                <span className="text-sm text-[#111b21]">
                    Get notified of new messages on your computer.
                </span>
                <div className="flex">
                    <span className=" text-sm text-[#111b21] hover:underline">
                        Turn on desktop notifications
                    </span>
                    <ChevronRight className=" mt-[5.5px]" />
                </div>
            </div>
            <div className="ml-auto">
                <WhiteCrossClose className="cursor-pointer text-white" />
            </div>
        </div>
    )
}
