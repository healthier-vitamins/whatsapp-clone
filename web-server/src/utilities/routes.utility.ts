import ChatPage from '../pages/chat/ChatPage'
import LoginPage from '../pages/login/LoginPage'

interface Route {
    url: string
    permissions: number[][]
    component: React.ComponentType | undefined
    pageTitle: string
}

type Urls = 'DEFAULT' | 'CHATS' | 'LOGIN'
type AllRoutes = {
    [key in Urls]: Route
}

const allRoutes: AllRoutes = {
    DEFAULT: {
        component: undefined,
        pageTitle: 'Whatsapp-Clone',
        permissions: [],
        url: '/'
    },
    CHATS: {
        component: ChatPage,
        pageTitle: '',
        permissions: [],
        url: '/chats'
    },
    LOGIN: {
        component: LoginPage,
        pageTitle: '',
        permissions: [],
        url: '/login'
    }
}

export default allRoutes
