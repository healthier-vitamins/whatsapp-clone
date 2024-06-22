import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IChat, IContact } from '../../../../shared/types/prisma'
import { RootState } from '../store'

export type TopNavButtonStateType = 'NEW_CHAT' | 'DEFAULT'

interface MiscState {
    initialUrl: string
    topNavButtonState: TopNavButtonStateType
    rightPageChat: Partial<IContact> | undefined
    leftPageSelectedTab: Partial<IContact> | undefined
}

const initialState: MiscState = {
    initialUrl: '',
    topNavButtonState: 'DEFAULT',
    rightPageChat: undefined,
    leftPageSelectedTab: undefined
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
        setRightPanelChat: (
            state,
            action: PayloadAction<Partial<IChat & IContact> | undefined>
        ) => {
            state.rightPageChat = action.payload
        },

        setLeftPanelSelectedTab: (
            state,
            action: PayloadAction<Partial<IContact> | undefined>
        ) => {
            state.leftPageSelectedTab = action.payload
        }
    }
})

const reducerMisc = miscSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMisc = (state: RootState) => state.misc

export default reducerMisc
