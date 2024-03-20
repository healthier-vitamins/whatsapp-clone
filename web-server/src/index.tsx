import './styles/main.scss'
import { createRoot } from 'react-dom/client'
import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
import ErrorPage from './pages/errors/ErrorPage'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={'/'}
            element={
                <div>
                    <div>hello werld</div>
                    <Outlet />
                </div>
            }
            errorElement={<ErrorPage />}
        ></Route>
    )
)

// update react 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide
const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(<RouterProvider router={router} />)
