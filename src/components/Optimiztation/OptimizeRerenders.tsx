import {memo, useCallback, useMemo, useState} from 'react';

interface Child {
    value: string
    fn: () => void
}

const ChildElem = memo(({ value, fn }: Child) => <div><button onClick={fn}>click</button><span>{value}</span></div>)

const ParentELem = () => {
    const [count, setCount] = useState(0)
    const inc = () => setCount(count => count +1)
    const fn = useCallback(() => {
        console.log('im calling')
    }, [])
    const value = useMemo(() => {
        return {name: 'Toha'}
    }, [])
    return (
        <div>
            <button onClick={inc}>Render Parent</button>
            <h3>{count}</h3>
            <ChildElem value={value.name} fn={fn} />
            <ChildElem value={value.name} fn={fn} />
        </div>
    )
}

const OptimizeRerenders = () => {
    return (
        <ParentELem />
    )
}

export default OptimizeRerenders
