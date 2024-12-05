import { createRoot, Root } from 'react-dom/client'
import React, { StrictMode } from 'react'
import AppRouter from './routers/AppRouter'

const root: Root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
)
