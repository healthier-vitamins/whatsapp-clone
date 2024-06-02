import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import apiAuthentication from '../rtk-query/api/authentication.api'
import { miscSlice } from './reducers/misc.reducer'
import apiContacts from '../rtk-query/api/contacts.api'

const store = configureStore({
    reducer: {
        misc: miscSlice.reducer,
        [apiAuthentication.reducerPath]: apiAuthentication.reducer,
        [apiContacts.reducerPath]: apiContacts.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiAuthentication.middleware)
            .concat(apiContacts.middleware)
})
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
