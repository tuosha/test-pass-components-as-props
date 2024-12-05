import { lazy } from 'react'

const LazyComponentLoading = lazy(() => new Promise((res) => setTimeout(() => res(import('./LazyText')), 1500)).then())

export default LazyComponentLoading
