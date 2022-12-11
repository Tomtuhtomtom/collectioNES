import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


export const Register = ({setAuth}) => {
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
                setAuth(username, res.data.auth_token)
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
        <div>
            <h1>Registration Page</h1>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    onChange={(e) => setUsername(e.target.value)}
                    type='text'
                    autoComplete='on'
                    value={username}
                    required
                    />
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    type='text'
                    autoComplete='on'
                    value={password}
                    required
                    />
                <button type='submit' value='Register'>Register</button>
            </form>
            <p>Already have an account?</p>
            <div>
                <Link to='/login/'>Back to Login</Link>
            </div>
        </div>
    )
}

