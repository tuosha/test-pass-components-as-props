import { useState } from 'react'
import UseEffectHook from './useEffectHook/useEffectHook'
import UseLayoutEffectHook from './useLayoutEffect/useLayoutEffect'

const UseEffectAndLayoutHooks = () => {
    const [type, showType] = useState<string>('')
    const onTypeClick = (type: string) => {
        showType(type === 'use-effect' ? 'use-layout' : 'use-effect')
    }
    const view = type === 'use-effect' ? <UseLayoutEffectHook /> : <UseEffectHook />
    return (
        <div>
            {view}
            <button onClick={() => onTypeClick('use-effect')}>useEffect</button>
            <button onClick={() => onTypeClick('use-layout')}>useLayoutEffect</button>
        </div>
    )
}

export default UseEffectAndLayoutHooks
