import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

export const NewCollection = ({ token }) => {
    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://127.0.0.1:8000/mycollections/',
            {
                name: name,
            },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
            )
            .then((res) => {
                setSubmitted(true)
                setName('')
            })
            .catch((error) => {
                console.log(error)
                if (error.response.data.username)
                    setError(error.response.data.username)

                if (error.response.data.password)
                    setError(error.response.data.password)
            })
    }

    if (submitted) {
        navigate('/')
    }

    const handleChange = (inputType, e) => {
        if (inputType === 'name') {
            setName(e.target.value)
        }
    }

    return (
        <>
            <div className='main-page-menu'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='new-collection'>Collection Name: </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            value={name}
                            required
                            className='main-menu-link-input'
                        ></input>
                    </div>
                    <div className='error'>
                        { error && <p>{error}</p> }
                    </div>
                    <div>
                        <ul>
                            <li className='main-menu-list-item'><Link onClick={handleSubmit} className='main-menu-link' >Create Collection</Link></li>
                            <li className='main-menu-list-item'><Link className='main-menu-link' to='/'>Back to Main Menu</Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        </>
    )
}