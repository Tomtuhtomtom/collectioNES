import './App.css';

import { Login } from './components/Login'
import { Title } from './components/Title'
import { Register } from './components/Register'
import { Collections } from './components/Collections'

import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
        <Title setAuth={setAuth} isLoggedIn={isLoggedIn} handleLogout={handleLogout} username={username} token={token} />
      </div>
    </div>
    );
}

export default App;
