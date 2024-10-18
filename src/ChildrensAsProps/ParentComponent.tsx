import { ReactNode } from 'react'

const ParentComponent = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}

export default ParentComponent
