import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type TopNavButtonStateType = 'NEW_CHAT' | undefined

interface MiscState {
    initialUrl: string
    topNavButtonState: TopNavButtonStateType
}

const initialState: MiscState = {
    initialUrl: '',
    topNavButtonState: undefined
}

export const miscSlice = createSlice({
    name: 'misc',
    initialState,
    reducers: {
        reset: (state) => {
            initialState.topNavButtonState = state.topNavButtonState
            return initialState
        },
        setTopNavButton: (
            state,
            action: PayloadAction<TopNavButtonStateType>
        ) => {
            state.topNavButtonState = action.payload
        }
    }
})

const reducerMisc = miscSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMisc = (state: RootState) => state.misc

export default reducerMisc
