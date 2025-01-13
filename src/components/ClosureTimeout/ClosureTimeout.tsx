import { useState } from 'react'
import cls from './ClosureTimeout.module.scss'

const ClosureTimeout = () => {
    const [clicks, setClicks] = useState(0)
    const onClick = () => {
        // to fix use callback instead closure; clicks => clicks + 1
        setTimeout(() => setClicks(clicks + 1), 2000)
    }
    return (
        <div className={cls.closure}>
            <h3>Closure in timeout</h3>
            <span className={cls.counter}>{clicks}</span>
            <button onClick={onClick}>click</button>
        </div>
    )
}

export default ClosureTimeout
