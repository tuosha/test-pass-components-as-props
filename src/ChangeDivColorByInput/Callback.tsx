import { ChangeEvent, useState } from 'react'

interface IChange {
    onChangeType: (arg0: string | number) => void
    labelType: string
}

const Callback = ({ onChangeType, labelType }: IChange) => {
    const [currentType, setCurrentType] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeType(e.target.value)
        setCurrentType(e.target.value)
    }
    return (
        <div>
            <label htmlFor={labelType}>{labelType}</label>
            <input type='text' name={labelType} onChange={handleChange} value={currentType} />
        </div>
    )
}

export default Callback
