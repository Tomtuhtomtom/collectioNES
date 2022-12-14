import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "../App.css"
import { Register } from './Register'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export const Login = ({ setAuth, isLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)
        axios
            .post('http://127.0.0.1:8000/auth/token/login/', {
                username: username,
                password: password,
            })
            .then((res) => {
                const token = res.data.auth_token
                setAuth(username, token)
                navigate('/')
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    if (!isLoggedIn){
    return (
        <div className="App">
            <div className="main-page main-title">
                <h1>collectioNES</h1>
            </div>
            <div className="main-page-menu">
                { error && <p className='error'>{error} </p> }
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username-input'>Username: </label>
                        <input
                            type='text'
                            id='username-input'
                            value={username}
                            required
                            onChange = {(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor='password-input'>Password: </label>
                        <input
                            type='password'
                            id='password-input'
                            value={password}
                            required
                            onChange = {(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <ul>
                            <li className="main-menu-list-item"><Link onClick={handleSubmit} className="main-menu-link" >Login</Link></li>
                            <li className="main-menu-list-item"><Link className="main-menu-link" to='/register/'>Register</Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}
}
