import PageOverlay from '../../components/common/overlay/PageOverlay'
import ProtectedWrapper from '../../components/common/rbac/ProtectedWrapper'
import SidebarLayout from '../layout/SidebarLayout'

export default function ChatPage() {
    return (
        <ProtectedWrapper
            children={<PageOverlay children={<SidebarLayout />} />}
        />
    )
}
