import React, { Component} from 'react'
import { MainMenu } from './MainMenu'
import App from '../App'
import { Link, Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'
import { NewCollection } from './NewCollection'
import { Collections } from './Collections'
import { useState } from 'react'
import axios from 'axios'

export const Title = ({setAuth, isLoggedIn, handleLogout, username, token}) => {
    const title = 'collectioNES'

    return (
        <>
        <div className='main-page-username-container'>{isLoggedIn ? (
            <h2 className='main-page-username'>{username}'s</h2>) : (<h2 className='main-page-username'></h2>)}
        </div>
        <div className='main-page main-title'>
            <h1><Link className="title-link" to='/'>{title}</Link></h1>
        </div>
        <div className='main-page-menu'>
        <Routes>
            <Route
                path='/'
                element={<MainMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} token={token} />}
                />
            <Route
                path='/login/'
                element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
                />
            <Route
                path='/register/'
                element={<Register setAuth={setAuth} isLoggedIn={isLoggedIn} />}
                />
            <Route
                path='/new-collection/'
                element={<NewCollection token={token} />}
                />
        </Routes>
        </div>
        </>
    )
    }

