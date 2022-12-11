import '../App.css';
import React, { Component } from 'react'
import { Login } from './Login';
import { Register } from './Register';

export class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu">
                <ul className="main-menu-list">
                    <li className="main-menu-list-item"><a className="main-menu-link" href='/login/'>Log In</a></li>
                    <li className="main-menu-list-item"><a className="main-menu-link" href='/register/'>Register</a></li>
                </ul>
            </div>
        )
    }
}
