import ItemList from '../Items/ItemList'
import booksData from '../Data/booksData'
import StateAsObject from '../StateAsObject/StateAsObject'
import SetIntervalUseEffect from '../SetIntervalUseEffect/SetIntervalUseEffect'
import ChangeDivColorByInput from '../ChangeDivColorByInput/ChangeDivColorByInput'
import MainComponent from '../ChildrensAsProps/MainComponent'

const App = () => {
    return (
        <div>
            <ItemList data={booksData} />
            <StateAsObject />
            <SetIntervalUseEffect />
            <ChangeDivColorByInput />
            <MainComponent />
        </div>
    )
}

export default App
