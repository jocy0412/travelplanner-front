import "./App.scss";
import Button from "./pages/Button";
import MultipleItems from "./pages/main/MultipleItems";

function App() {
    return (
        <div className="App">
            <MultipleItems />
            <div>
                <Button children="Default Button"></Button>
                <Button
                    children="Green Button"
                    background="pink"
                    color="green"
                ></Button>
                <Button children="Blue Button" primary></Button>
            </div>
        </div>
    );
}

export default App;
