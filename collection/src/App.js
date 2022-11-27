
import './App.css';
import {LoggedInMenu} from './components/LoggedInMenu';
import {LoginMenu} from './components/LoginMenu'

const isLoggedIn = true
// const isLoggedIn = false

function App() {
  return (
    <div className="App">
      <div className="main-page-username-container">{isLoggedIn ? (
          <h2 className="main-page-username">Username's</h2>) : (<h2 className="main-page-username"></h2>)}</div>
      <div className="main-page main-title">
        <h1>collectioNES</h1>
      </div>
    <div className="main-page-menu">
      {!isLoggedIn ? (
        <LoginMenu />) : (<LoggedInMenu />)}
    </div>
    </div>
    );
}

export default App;
