import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface MiscState {
    initialUrl: string
}

const initialState: MiscState = {
    initialUrl: ''
}

export const miscSlice = createSlice({
    name: 'misc',
    initialState,
    reducers: {
        reset: (state) => {
            return initialState
        },
        setUser: (state, action: PayloadAction<string>) => {
            state.initialUrl = action.payload
        }
    }
})

const reducerMisc = miscSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMisc = (state: RootState) => state.misc

export default reducerMisc
