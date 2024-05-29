import SidebarContainer from '../../components/sidebar/SidebarContainer'

export default function SidebarLayout() {
    return (
        <div className="flex h-full w-full">
            <div className="h-full w-full max-w-[450px]">
                <SidebarContainer />
            </div>
            <div className="h-full w-full border-2 border-red-500 "></div>
        </div>
    )
}
