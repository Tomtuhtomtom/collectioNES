
import './App.css';
import { Login } from './components/Login'

function App() {
  return (
    <div className="App">
      <div className="main-title">
        <div className="row">
          <div className="title-item"><h1>collectioNES</h1></div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
