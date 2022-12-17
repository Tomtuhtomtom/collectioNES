import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


export const Register = ({setAuth, isLoggedIn}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://127.0.0.1:8000/auth/users/', {
                username: username,
                password: password,
            })
            .then(() =>
            axios.post(
                'http://127.0.0.1:8000/auth/token/login/',
                {
                    username: username,
                    password: password,
                }
            ))
            .then((res) => {
                const token = res.data.auth_token
                setAuth(username, token)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                if (error.response.data.username)
                    setError(error.response.data.username)

                if (error.response.data.password)
                    setError(error.response.data.password)
            })
    }

    return (
        <>
            <div className='main-page-menu'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username: </label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type='text'
                            autoComplete='on'
                            value={username}
                            required
                            className='main-menu-link-input'
                        ></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type='text'
                            autoComplete='on'
                            value={password}
                            required
                            className='main-menu-link-input'
                        ></input>
                    </div>
                    <div className='error'>
                        { error && <p>{error}</p> }
                    </div>
                    <div>
                        <ul>
                            <li className='main-menu-list-item'><Link onClick={handleSubmit} className='main-menu-link' >Register</Link></li>
                            <li className='main-menu-list-item'><Link className='main-menu-link' to='/login/'>Back to Login</Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        </>
    )
}

