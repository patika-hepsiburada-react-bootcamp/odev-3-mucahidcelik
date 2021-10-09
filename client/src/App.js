import './App.css';
import Main from "./Main";
import {VoteProvider} from "./context/VoteContext";

function App() {
    return (
        <div className="App">
            <VoteProvider>
                <Main/>
            </VoteProvider>
        </div>
    );
}

export default App;
