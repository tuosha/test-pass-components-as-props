import { useEffect, useMemo, useState } from 'react'

interface IUser {
    selected: boolean
    firstName: string
    lastName: string
    age: number
}

const StateAsObject = () => {
    const [state, setState] = useState<IUser>({
        selected: false,
        firstName: '',
        lastName: '',
        age: 18,
    })
    const [firstName, setName] = useState<string>('')
    const user = useMemo(
        () => ({
            firstName: state.firstName,
            selected: state.selected,
        }),
        [state.firstName, state.selected],
    )
    useEffect(() => {
        console.log('State changed!')
    }, [user])
    const handleAdd = () => {
        setState((prev) => ({ ...prev, firstName }))
    }
    const handleSelect = () => {
        setState((prev) => ({ ...prev, selected: true }))
    }
    return (
        <div>
            <h3>Work with state as an object: </h3>
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAdd}>Add button</button>
            <button onClick={handleSelect}>Select button</button>
            <span>{`First name: ${state.firstName} + selected: ${state.selected}`}</span>
        </div>
    )
}

export default StateAsObject
