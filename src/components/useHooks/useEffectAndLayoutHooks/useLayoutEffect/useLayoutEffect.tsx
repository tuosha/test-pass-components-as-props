import { useLayoutEffect, useRef, useState } from 'react'
import cls from '../useEffectAndLayoutHooks.module.scss'
import { useDelay } from '../../../../helpers/useDelay'

const UseLayoutEffectHook = () => {
    const [width, setWidth] = useState<number>(0)
    const square = useRef<HTMLDivElement>()
    useLayoutEffect(() => {
        useDelay(2000)
        setWidth(square.current.clientWidth)
        console.log('useLayoutEffect mounted! width is: ' + square.current.clientWidth)
    }, [])
    return (
        <div>
            <h4>I&apos;m useLayoutEffect hook (it renders after function worked)!</h4>
            <div ref={square} className={cls.redSquare}></div>
            <span>width: {width}</span>
        </div>
    )
}

export default UseLayoutEffectHook
