import '../App.css';
import React, { Component } from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { Link } from 'react-router-dom'

export class MainMenu extends Component {
    render() {
        return (
            <div className='main-menu'>
                <ul className='main-menu-list'>
                    <li className='main-menu-list-item'><Link className='main-menu-link' to='/login/'>Log In</Link></li>
                    <li className='main-menu-list-item'><Link className='main-menu-link' onClick={ Register } to='/register/'>Register</Link></li>
                </ul>
            </div>
        )
    }
}
