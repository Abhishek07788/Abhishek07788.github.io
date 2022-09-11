import './App.css';
import "./css/main.css"
import Main from './components/Main';
import Darkmode from './components/Darkmode';

function App() {
  return (
    <div className="App">
      <Darkmode>
      <Main />
      </Darkmode>
    </div>
  );
}

export default App;
