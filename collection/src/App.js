import './App.css';

import { LoggedInMenu } from './components/LoggedInMenu'
import { MainMenu } from './components/MainMenu'
import { Login } from './components/Login'
import { Title } from './components/Title'
import { Register } from './components/Register'

import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// const isLoggedIn = true
// const isLoggedIn = false

function App() {
  const [token, setToken] = useLocalStorageState('collectionToken', null)
  const [username, setUsername] = useLocalStorageState('collectionUsername', '')
  const navigate = useNavigate()

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    axios
      .post(
        'http://127.0.0.1:8000/auth/token/logout',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() =>
        setAuth('', null),
        navigate('/')
      )
      .catch(() =>
      setAuth('', null)
      )
  }

  const isLoggedIn = username && token

  return (
    <div className='App'>
      <div>
        <div className='main-page-username-container'>{isLoggedIn ? (
          <h2 className='main-page-username'>{username}'s</h2>) : (<h2 className='main-page-username'></h2>)}
        </div>
        <Routes>
          <Route
            path='/'
            element={<Title setAuth={setAuth} isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />}
          />
          <Route
            path='/login/'
            element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path='/register/'
            element={<Register setAuth={setAuth} isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </div>
    </div>
    );
}

export default App;
