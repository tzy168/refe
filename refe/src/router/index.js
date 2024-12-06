import { createBrowserRouter } from 'react-router-dom'
import App from '../App.js'
import Myelement from '../pages/myElement/index.js'
import Hc from '../pages/hc/index.js'

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/myelement',
        Component: Myelement,
    },
    {
        path: '/hc',
        Component: Hc,
    }
])

export default router