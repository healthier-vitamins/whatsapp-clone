import React from 'react'

interface Route {
    url: string
    permissions: number[][]
    component: React.ReactNode | undefined
    pageTitle: string
}

type Urls = 'DEFAULT'
type AllRoutes = {
    [key in Urls]: Route
}

const allRoutes: AllRoutes = {
    DEFAULT: {
        component: undefined,
        pageTitle: 'Whatsapp-Clone',
        permissions: [],
        url: '/'
    }
}

export default allRoutes
