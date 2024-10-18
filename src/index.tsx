import App from './App/App'
import { createRoot, Root } from 'react-dom/client'
import { StrictMode } from 'react'

const root: Root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
