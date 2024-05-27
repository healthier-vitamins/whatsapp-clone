import { Outlet } from 'react-router-dom'
import SidebarContainer from '../../components/sidebar/SidebarContainer'

export default function SidebarLayout() {
    return (
        <>
            <div className="h-full w-full max-w-[450px]">
                <SidebarContainer />
            </div>
            <Outlet />
        </>
    )
}
