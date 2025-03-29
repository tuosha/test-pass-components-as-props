import { createRoot, Root } from 'react-dom/client'
import { StrictMode } from 'react'
import AppRouter from './routers/AppRouter'
import { StoreProvider } from './components/TestRedux/store/provider/StoreProvider';

const root: Root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <StoreProvider>
            <AppRouter />
        </StoreProvider>
    </StrictMode>,
)
