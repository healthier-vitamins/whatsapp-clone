import { createRoot } from 'react-dom/client'
import {
    Outlet,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
import ErrorPage from './pages/errors/ErrorPage'
import './styles/main.css'

import React from 'react'
import { Provider } from 'react-redux'
import UnProtectedWrapper from './components/rbac/UnProtectedWrapper'
import store from './redux/store'
import allRoutes from './utilities/routes.utility'
import NotFoundPage from './pages/errors/NotFoundPage'
import CustomRouter from './components/router/CustomBrowserRouter'
import customHistory from './components/router/CustomHistory'
import ProtectedWrapper from './components/rbac/ProtectedWrapper'
import ErrorBoundary from './components/errors/ErrorBoundary'

function renderComponent(component: React.ComponentType | undefined) {
    if (component) {
        return React.createElement(component)
    } else {
        return <></>
    }
}

// ? to be used with react router
// export const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route
//             path={allRoutes.DEFAULT.url}
//             element={
//                 <UnProtectedWrapper>
//                     <div>
//                         <Outlet />
//                     </div>
//                 </UnProtectedWrapper>
//             }
//             errorElement={<ErrorPage />}
//         >
//             <Route
//                 path={allRoutes.CHATS.url}
//                 element={renderComponent(allRoutes.CHATS.component)}
//             ></Route>

//             <Route
//                 path={allRoutes.LOGIN.url}
//                 element={
//                     <UnProtectedWrapper>
//                         {renderComponent(allRoutes.LOGIN.component)}
//                     </UnProtectedWrapper>
//                 }
//             ></Route>
//         </Route>
//     )
// )

// update react 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide
const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        {/* <RouterProvider router={router} /> */}
        <CustomRouter history={customHistory}>
            <ErrorBoundary>
                <Routes>
                    {/* <Route
                    path={allRoutes.DEFAULT.url}
                    element={
                        <UnProtectedWrapper>
                            <Outlet />
                        </UnProtectedWrapper>
                    }
                /> */}
                    <Route
                        path={allRoutes.CHATS.url}
                        element={
                            <ProtectedWrapper>
                                {renderComponent(allRoutes.CHATS.component)}
                            </ProtectedWrapper>
                        }
                    ></Route>

                    <Route
                        path={allRoutes.LOGIN.url}
                        element={
                            <UnProtectedWrapper>
                                {renderComponent(allRoutes.LOGIN.component)}
                            </UnProtectedWrapper>
                        }
                    ></Route>

                    <Route
                        path="*"
                        element={
                            <UnProtectedWrapper>
                                <NotFoundPage />
                            </UnProtectedWrapper>
                        }
                    />
                </Routes>
            </ErrorBoundary>
        </CustomRouter>
    </Provider>
)
