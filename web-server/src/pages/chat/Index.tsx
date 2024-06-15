import OverallLayout from '../../components/layout/OverallLayout'
import PageOverlay from '../../components/overlay/PageOverlay'
import ProtectedWrapper from '../../components/rbac/ProtectedWrapper'

export default function ChatPage() {
    return (
        <ProtectedWrapper
            children={<PageOverlay children={<OverallLayout />} />}
        />
    )
}
