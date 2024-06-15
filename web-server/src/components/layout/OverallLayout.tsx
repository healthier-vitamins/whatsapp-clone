import WhatsappLaptopImg from '../../img/WhatsappLaptopImg'
import { useAppSelector } from '../../redux/hooks'
import SidebarContainer from '../sidebar/Index'

export default function OverallLayout() {
    // -- Redux
    const miscSelector = useAppSelector((state) => state.misc)

    return (
        <div className="flex h-full w-full">
            <div className="h-full w-full max-w-[450px]">
                <SidebarContainer />
            </div>
            <div className="secondary-background h-full w-full border-l-[1px] border-l-[#e9edef]">
                <div className="flex flex-col items-center">
                    <div className="mt-72 flex flex-col items-center">
                        <WhatsappLaptopImg />

                        <span className="mt-4 text-3xl font-normal text-[#41525d]">
                            Welcome to Whatsapp Web Clone :)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
