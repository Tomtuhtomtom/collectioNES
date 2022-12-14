import React, { Component } from 'react'
import { MainMenu } from './MainMenu'
import { LoggedInMenu } from './LoggedInMenu'
import App from '../App'
import { Link } from 'react-router-dom'

export const Title = ({setAuth, isLoggedIn, username, handleLogout}) => {
    return (
        <>
        <div className='main-page main-title'>
            <h1><Link className="title-link" to='/'>collectioNES</Link></h1>
        </div>
        <div className='main-page-menu'>
            {!isLoggedIn ? (
            <MainMenu />) : (<LoggedInMenu handleLogout={handleLogout} />)}
        </div>
        </>
    )
    }

