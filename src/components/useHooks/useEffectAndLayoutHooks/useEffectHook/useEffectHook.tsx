import { useEffect, useRef, useState } from 'react'
import cls from '../useEffectAndLayoutHooks.module.scss'
import { useDelay } from '../../../../helpers/useDelay'

const UseEffectHook = () => {
    const [width, setWidth] = useState<number>(0)
    const square = useRef<HTMLDivElement>()
    useEffect(() => {
        useDelay(2000)
        setWidth(square.current.clientWidth)
        console.log('useEffect mounted! width is: ' + square.current.clientWidth)
    }, [])
    return (
        <div>
            <h4>I&apos;m useEffect hook (it renders before function worked)! Please refresh (by F5) page to see</h4>
            <div ref={square} className={cls.greenSquare}></div>
            <span>width: {width}</span>
        </div>
    )
}

export default UseEffectHook
