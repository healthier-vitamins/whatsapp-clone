import { IGetAllContacts } from './../../../../shared/types/responses/contacts/index'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiContacts = createApi({
    reducerPath: 'apiContacts',
    tagTypes: ['Contact'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/contact'
    }),
    endpoints: (build) => ({
        getAll: build.query<IGetAllContacts[], undefined>({
            providesTags: (result, error, id) => {
                console.log('result: ', result)
                console.log('error: ', error)
                console.log('id: ', id)
                return [{ type: 'Contact' }]
            },
            // pick out data and prevent nested properties in a hook or selector
            transformResponse: (
                response: { data: IGetAllContacts[] },
                meta,
                arg
            ) => {
                return response.data
            },
            // pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (response, meta, arg) => {
                console.log(response)
                return response.data
            },
            query: () => ({
                url: `get-all`,
                method: 'GET'
            })
        })
    })
})

export const { useGetAllQuery } = apiContacts
export default apiContacts
