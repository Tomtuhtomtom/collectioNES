import React, { Component} from 'react'
import { MainMenu } from './MainMenu'
import App from '../App'
import { Link, Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'

export const Title = ({setAuth, isLoggedIn, username, handleLogout}) => {
    return (
        <>
        <div className='main-page main-title'>
            <h1><Link className="title-link" to='/'>collectioNES</Link></h1>
        </div>
        <div className='main-page-menu'>
        <Routes>
            <Route
                path='/'
                element={<MainMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
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
        </>
    )
    }

