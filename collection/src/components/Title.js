import React, { Component } from 'react'
import { MainMenu } from './MainMenu'
import { LoggedInMenu } from './LoggedInMenu'
import App from '../App'

export const Title = ({setAuth, isLoggedIn, username, handleLogout}) => {
    return (
        <div>
            <div className="main-page-username-container">{isLoggedIn ? (
                <h2 className="main-page-username">{username}'s</h2>) : (<h2 className="main-page-username"></h2>)}
            </div>
            <div className="main-page main-title">
                <h1>collectioNES</h1>
            </div>
            <div className="main-page-menu">
                {!isLoggedIn ? (
                <MainMenu />) : (<LoggedInMenu handleLogout={handleLogout} />)}
            </div>
        </div>
    )
    }

