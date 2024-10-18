import { useEffect, useState } from 'react'
import CustomItem from './CustomItem'

interface booksListData {
    data: object[]
}

const ItemList = ({ data }: booksListData) => {
    const [currentData, setData] = useState([])
    useEffect(() => setData(data), [data])
    const list = currentData.length ? (
        <ul>
            {currentData.map((el) => (
                <CustomItem key={el.id} item={el} />
            ))}
        </ul>
    ) : (
        <p>No records!</p>
    )
    return (
        <div>
            <h3>Test pass custom component to list: </h3>
            {list}
        </div>
    )
}

export default ItemList
