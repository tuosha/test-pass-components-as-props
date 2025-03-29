import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { CashScheme } from '../Cash/model/types/cashSheme'
import { cashReducer } from '../Cash/model/slice/cashSlice'

export interface StateScheme {
    cash?: CashScheme
}

export function createReduxStore(initialState: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        cash: cashReducer,
    }
    return configureStore<StateScheme>({
        reducer: rootReducers,
        preloadedState: initialState,
    })
}
