import { useState } from 'react'
import Callback from './Callback'

const ChangeDivColorByInput = () => {
    const [color, setColor] = useState<string>('black')
    const [squireWidth, setWidth] = useState<number>(50)
    const labels = {
        color: 'Set color: ',
        width: 'Set width: ',
    }
    const handleChangeColor = (color: string) => {
        setColor(color)
    }
    const handleChangeWidth = (width: number) => {
        setWidth(width)
    }
    return (
        <div>
            <h3>Test pass props from parent to children and back again: </h3>
            <div
                style={{
                    background: `${color}`,
                    height: `${squireWidth}` + 'px',
                    width: `${squireWidth}` + 'px',
                }}
            ></div>
            <Callback onChangeType={handleChangeColor} labelType={labels.color} />
            <Callback onChangeType={handleChangeWidth} labelType={labels.width} />
        </div>
    )
}

export default ChangeDivColorByInput
