import { CashScheme } from '../types/cashSheme'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: CashScheme = {
    value: 0,
}

export const cashSlice = createSlice({
    name: "cashSlice",
    initialState: initialState,
    reducers: {
        addCash: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        getCash: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
    }
})


export const {actions: cashActions} = cashSlice
export const {reducer: cashReducer} = cashSlice
