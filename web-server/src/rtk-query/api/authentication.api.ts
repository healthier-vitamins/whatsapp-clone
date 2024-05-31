// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/**
 * @type LoginReqArgs
 */
export type LoginReqArgs = {
    id: string | undefined
    name: string | undefined
}

function providesList<R extends { id: string | number }[], T extends string>(
    resultsWithIds: R | undefined,
    tagType: T
) {
    return resultsWithIds
        ? [
              { type: tagType, id: 'LIST' },
              ...resultsWithIds.map(({ id }) => ({ type: tagType, id }))
          ]
        : [{ type: tagType, id: 'LIST' }]
}

export const authenticationApi = createApi({
    reducerPath: 'authenticationApi',
    tagTypes: ['Login', 'TestUpdate'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/authentication'
    }),
    endpoints: (build) => ({
        login: build.query<string, LoginReqArgs>({
            providesTags: (result, error, id) => {
                console.log('result: ', result)
                console.log('error: ', error)
                console.log('id: ', id)
                return [{ type: 'Login' }]
            },
            // pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: string }, meta, arg) => {
                return response.data
            },
            // pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (response, meta, arg) => {
                console.log(response)
                return response.data
            },
            // // trigger side effects or optimistic updates
            // onQueryStarted(
            //     id,
            //     {
            //         dispatch,
            //         getState,
            //         extra,
            //         requestId,
            //         queryFulfilled,
            //         getCacheEntry,
            //         updateCachedData
            //     }
            // ) {},
            // // handle subscriptions etc
            // onCacheEntryAdded(
            //     id,
            //     {
            //         dispatch,
            //         getState,
            //         extra,
            //         requestId,
            //         cacheEntryRemoved,
            //         cacheDataLoaded,
            //         getCacheEntry,
            //         updateCachedData
            //     }
            // ) {},
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
            query: ({ id, name }) => ({
                url: `login`,
                method: 'POST',
                body: { id: id, name: name },
                params: { id: id, name: name }
            })
        })
        // testUpdate: build.mutation
    })
})

export const { useLoginQuery } = authenticationApi
const apiAuthentication = authenticationApi
export default apiAuthentication
