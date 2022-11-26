import React, { Component } from 'react'

export class LoggedInMenu extends Component {
    render() {
        return (
            <div className="main-menu">
                <ul className="main-menu-list">
                    <li className="main-menu-list-item"><a className="main-menu-link" href=''>Log Out</a></li>
                    <li className="main-menu-list-item"><a className="main-menu-link" href=''>New Collection</a></li>
                    <li className="main-menu-list-item"><a className="main-menu-link" href=''>Load Collection</a></li>
                    <li className="main-menu-list-item"><a className="main-menu-link" href=''>Official Collection</a></li>
                    <li className="main-menu-list-item"><a className="main-menu-link" href=''>Unlicensed Collection</a></li>
                </ul>
            </div>
        )
    }
}
