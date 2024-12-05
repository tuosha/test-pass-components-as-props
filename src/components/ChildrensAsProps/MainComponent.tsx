import ParentComponent from './ParentComponent'
import ChildComponent from './ChildComponent'

const MainComponent = () => {
    return (
        <div>
            <h3>Test pass children components: </h3>
            <ParentComponent>
                <ChildComponent />
            </ParentComponent>
        </div>
    )
}

export default MainComponent
