import { IContact } from '../../../../shared/types/responses/contacts/index'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiContacts = createApi({
    reducerPath: 'apiContacts',
    tagTypes: ['Contact'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/contact'
    }),
    endpoints: (build) => ({
        getAll: build.query<IContact[], Partial<Pick<IContact, 'id'>>>({
            providesTags: (result, error, id) => {
                console.log('result: ', result)
                console.log('error: ', error)
                console.log('id: ', id)
                return [{ type: 'Contact' }]
            },
            // pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: IContact[] }, meta, arg) => {
                console.log('res: ', response)
                return response.data
            },
            // pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (response, meta, arg) => {
                console.log('error res: ', response)
                return response.data
            },
            query: (payload) => ({
                url: `get-all-contacts`,
                method: 'GET',
                params: payload
            })
        })
    })
})

export const { useGetAllQuery } = apiContacts
export default apiContacts
