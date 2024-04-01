// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authenticationApi = createApi({
    reducerPath: 'authenticationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'localhost:3001/api/authentication/login'
    }),
    endpoints: (builder) => ({
        login: builder.query<>
    })
})
