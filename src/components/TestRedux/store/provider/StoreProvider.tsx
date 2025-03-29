import {createReduxStore, StateScheme} from '../store';
import {Provider} from 'react-redux';
import {ReactNode} from 'react';

interface StoreProviderInterface {
    children?: ReactNode,
    initialState?: StateScheme
}

export const StoreProvider = ({children, initialState} : StoreProviderInterface) => {
    const store = createReduxStore(initialState)
    return (
        <Provider store={store}>{children}</Provider>
    )

}