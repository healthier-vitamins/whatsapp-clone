import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/specific/Sidebar'

export default function SidebarLayout() {
    return (
        <div className="h-dvh w-screen">
            <div className="h-dvh max-w-lg border-2 border-solid border-indigo-600">
                <Sidebar />
            </div>
            <Outlet />
        </div>
    )
}
