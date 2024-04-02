import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { authenticationApi } from '../rtk-query/api/authentication.api'
import { authenticationSlice } from './reducers/authentication.reducer'

const store = configureStore({
    reducer: {
        authentication: authenticationSlice.reducer,
        [authenticationApi.reducerPath]: authenticationApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authenticationApi.middleware)
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
