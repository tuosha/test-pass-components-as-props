import {useDispatch, useSelector} from 'react-redux';
import {cashActions} from './Cash/model/slice/cashSlice';
import {getCashValue} from './Cash/model/selectors/getCashValue';

const TestRedux = () => {
    const dispatch = useDispatch()
    const cash = useSelector(getCashValue)
    const onAddCash = () => {
        dispatch(cashActions.addCash(Number(prompt('введите значение'))))
    }
    const onGetCash = () => {
        dispatch(cashActions.getCash(Number(prompt('введите значение'))))
    }
    return (
        <div>
            <h3>{cash}</h3>
            <button onClick={onAddCash}>Add money</button>
            <button onClick={onGetCash}>Get money</button>
        </div>
    )
}

export default TestRedux;