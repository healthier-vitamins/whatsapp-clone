import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IContact } from '../../../../shared/types/responses/contacts'

export type TopNavButtonStateType = 'NEW_CHAT' | 'DEFAULT'

interface MiscState {
    initialUrl: string
    topNavButtonState: TopNavButtonStateType
    rightPageChat: Partial<IContact> | undefined
}

const initialState: MiscState = {
    initialUrl: '',
    topNavButtonState: 'DEFAULT',
    rightPageChat: undefined
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
        },
        setRightPageChat: (
            state,
            action: PayloadAction<Partial<IContact> | undefined>
        ) => {
            state.rightPageChat = action.payload
        }
    }
})

const reducerMisc = miscSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMisc = (state: RootState) => state.misc

export default reducerMisc
