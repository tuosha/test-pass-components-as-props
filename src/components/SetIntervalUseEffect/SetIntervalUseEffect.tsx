import { useEffect, useState } from 'react'

const SetIntervalUseEffect = () => {
    const [counter, setCounter] = useState<number>(0)
    useEffect(() => {
        console.log('effect on interval work')
        const interval = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <h3>Test correct useEffect work (strict mode) & setInterval:</h3>
            <span>{'Counter: ' + counter}</span>
        </div>
    )
}

export default SetIntervalUseEffect
