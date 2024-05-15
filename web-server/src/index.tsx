import { createRoot } from 'react-dom/client'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
import ErrorPage from './pages/errors/ErrorPage'
import './styles/main.css'

import { Provider } from 'react-redux'
import SidebarLayout from './pages/layout/SidebarLayout'
import LoginPage from './pages/login/LoginPage'
import store from './redux/store'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={'/'}
            element={<SidebarLayout />}
            errorElement={<ErrorPage />}
        >
            <Route path="/login" element={<LoginPage />}></Route>
        </Route>
    )
)

// update react 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide
const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
