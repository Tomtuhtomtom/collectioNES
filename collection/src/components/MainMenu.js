import '../App.css';
import React, { Component } from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { Link } from 'react-router-dom'
import { Collections } from './Collections'
import axios from 'axios'
import { useState } from 'react'

export const MainMenu = ({isLoggedIn, handleLogout, token}) => {
    
    return (
        <div className='main-menu'>
            <ul className='main-menu-list'>
                {isLoggedIn ? (
                    <>
                    <li className='main-menu-list-item'><Link className='main-menu-link' to='/new-collection/'>New Collection</Link></li>
                    <li className='main-menu-list-item'><Link className='main-menu-link' to='/load-collection/'>Load Collection</Link></li>
                    <li className='main-menu-list-item'><Link className='main-menu-link' to=''>Official Collection</Link></li>
                    <li className='main-menu-list-item'><Link className='main-menu-link' to=''>Unlicensed Collection</Link></li>
                    <li className='main-menu-list-item'><Link className='main-menu-link' onClick={handleLogout} to=''>Log Out</Link></li>
                    </>
                    ) : (
                    <>
                    <li className='main-menu-list-item'><Link className='main-menu-link' to='/login/'>Log In</Link></li>
                    </>
                    )
                }
            </ul>
        </div>
    )
}