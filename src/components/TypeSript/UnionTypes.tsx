interface SimpleUser {
    firstName: string
    lastName: string
    age: number
}

type UserKeys = 'name' | 'firstName' | 'lastName' | 'age'

type PartialUser = Partial<SimpleUser>

type RequiredUserData = Required<SimpleUser>

type OmitUser = Omit<SimpleUser, 'age' | 'firstName'>

type RecordUser = Record<UserKeys, string | number>

type OmitRecordUser = Omit<RecordUser, 'name' | 'lastName'>

const UnionTypes = () => {
    const partialUser: PartialUser = {
        firstName: 'Leo',
    }
    const requiredUser: RequiredUserData = {
        firstName: '',
        lastName: '',
        age: 50,
    }
    const omitUser: OmitUser = {
        lastName: 'Leo',
    }
    const recordUser: RecordUser = {
        name: 'Toha',
        firstName: 'Oho',
        lastName: 'Ibn',
        age: 20,
    }
    const omitRecordUser: OmitRecordUser | PartialUser = {
        firstName: 'Oho',
    }
    const showRecords = Object.entries(recordUser).map(([key, val]) => <li key={key}>{val}</li>)

    return (
        <div>
            <h5>Omit</h5>
            <h5>Partial</h5>
            <span>{partialUser.firstName}</span>
            <h5>Partial</h5><ul>{showRecords}</ul>
        </div>
    )
}

export default UnionTypes
