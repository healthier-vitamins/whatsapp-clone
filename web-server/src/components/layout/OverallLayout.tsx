import WhatsappLaptopImg from '../../img/WhatsappLaptopImg'
import ChatPage from '../../pages/chat/Index'
import { useAppSelector } from '../../redux/hooks'
import SidebarContainer from '../sidebar/Index'

export default function OverallLayout() {
    // -- Redux
    const miscSelector = useAppSelector((state) => state.misc)

    // -- Function
    // TODO to be refactored into a component
    function renderRightPage() {
        if (miscSelector.rightPageChat) {
            return <ChatPage />
        }
        return (
            <div className="bg-secondary-background border-l-primary-border-color h-full w-full border-l-[1px]">
                <div className="flex h-full flex-col items-center justify-center">
                    <WhatsappLaptopImg />

                    <span className="mt-4 text-3xl font-normal text-[#41525d]">
                        Welcome to Whatsapp Web Clone :)
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex h-full w-full">
            <div className="h-full w-full max-w-[450px]">
                <SidebarContainer />
            </div>
            {renderRightPage()}
        </div>
    )
}
