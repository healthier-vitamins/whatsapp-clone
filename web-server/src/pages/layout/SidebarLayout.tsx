import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'

export default function SidebarLayout() {
    return (
        <>
            <div className="h-full w-full max-w-lg">
                <Sidebar />
            </div>
            <Outlet />
        </>
    )
}
