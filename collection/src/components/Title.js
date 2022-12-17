import React, { Component } from 'react'
import { MainMenu } from './MainMenu'
import App from '../App'
import { Link } from 'react-router-dom'

export const Title = ({setAuth, isLoggedIn, username, handleLogout}) => {
    return (
        <>
        <div className='main-page main-title'>
            <h1><Link className="title-link" to='/'>collectioNES</Link></h1>
        </div>
        <div className='main-page-menu'>
            <MainMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </div>
        </>
    )
    }

