import { ComponentType, FC, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

export default function Loadable<P extends object>(Component: ComponentType<P>): FC<P> {
    function Wrapped(props: P) {
        return (
            <Suspense fallback={<LoadingScreen />}>
                <Component {...(props as P)} />
            </Suspense>
        )
    }

    return Wrapped
}

// Use array functions in Wrapped Components show warning "Component definition is missing display name react/display-name"

// const Loadable =
//     <P extends object>(Component: ComponentType<P>): FC<P> =>
//     (props: P) => (
//         <Suspense fallback={<LoadingScreen />}>
//             <Component {...(props as P)} />
//         </Suspense>
//     )
//
// export default Loadable
