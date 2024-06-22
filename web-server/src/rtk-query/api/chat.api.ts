import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetChatRequestParams } from '../../../../shared/types/requests/chat'
import { IChat, IContact } from './../../../../shared/types/prisma/index'

const apiChat = createApi({
    reducerPath: 'apiChat',
    tagTypes: ['GetChat'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/chat'
    }),
    endpoints: (build) => ({
        getChat: build.query<
            Partial<IContact & IChat> | undefined | null,
            GetChatRequestParams
        >({
            providesTags: (result, error, id) => {
                console.log('result: ', result)
                console.log('error: ', error)
                console.log('id: ', id)

                return [{ type: 'GetChat' }]
            },
            // pick out data and prevent nested properties in a hook or selector
            transformResponse: (
                response: {
                    data: Partial<IContact & IChat> | undefined | null
                },
                meta,
                arg
            ) => {
                return response.data
            },
            // pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (response, meta, arg) => {
                return response.data
            },
            query: (payload) => ({
                url: `get-chat`,
                method: 'GET',
                params: payload
            })
        })
    })
})

export const { useGetChatQuery } = apiChat
export default apiChat
