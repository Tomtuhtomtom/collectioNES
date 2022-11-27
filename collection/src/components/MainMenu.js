import '../App.css';
import React, { Component } from 'react'

export class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu">
                <ul className="main-menu-list">
                    <li className="main-menu-list-item"><a className="main-menu-link" href=''>Log In</a></li>
                    <li className="main-menu-list-item"><a className="main-menu-link" href=''>Register</a></li>
                </ul>
            </div>
        )
    }
}
