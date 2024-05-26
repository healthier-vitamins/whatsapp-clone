import { createRoot } from 'react-dom/client'
import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
import ErrorPage from './pages/errors/ErrorPage'
import './styles/main.css'

import React from 'react'
import { Provider } from 'react-redux'
import PageOverlay from './components/common/overlay/PageOverlay'
import ProtectedWrapper from './components/common/rbac/ProtectedWrapper'
import UnProtectedWrapper from './components/common/rbac/UnProtectedWrapper'
import LoginPage from './pages/login/LoginPage'
import store from './redux/store'
import allRoutes from './utilities/routes.utility'

function renderComponent(component: React.ComponentType | undefined) {
    if (component) {
        return React.createElement(component)
    } else {
        return <></>
    }
}

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={allRoutes.DEFAULT.url}
            element={
                <UnProtectedWrapper>
                    <div>
                        <Outlet />
                    </div>
                </UnProtectedWrapper>
            }
            errorElement={<ErrorPage />}
        >
            <Route
                path={allRoutes.CHATS.url}
                element={
                    <ProtectedWrapper
                        children={
                            <PageOverlay
                                children={renderComponent(
                                    allRoutes.CHATS.component
                                )}
                            />
                        }
                    />
                }
            ></Route>
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
