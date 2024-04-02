// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authenticationApi = createApi({
    reducerPath: 'authenticationApi',
    tagTypes: ['Login'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/authentication'
    }),
    endpoints: (build) => ({
        login: build.query<string, void>({
            providesTags: ['Login'],
            // queryFn: (arg, queryApi, extraOptions, baseQuery) => {
            //     // if (arg <= 0) {
            //     //     return {
            //     //       error: {
            //     //         status: 500,
            //     //         statusText: 'Internal Server Error',
            //     //         data: 'Invalid ID provided.',
            //     //       },
            //     //     }
            //     //   }
            //     return { data: '' }
            // }
            query: () => ({
                url: 'login',
                method: 'POST',
                body: ''
            })
        })
    })
})

export const { useLoginQuery } = authenticationApi
