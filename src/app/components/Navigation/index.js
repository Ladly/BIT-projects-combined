import React from 'react'

import SearchInput from './../../containers/SearchInput' 

import { Link } from 'react-router-dom'

export const Navigation = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">BitShow</Link> 
                <div id="navbarNav"> 
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/falseusers" className="nav-link">Api users</Link>
                        </li>
                    </ul>
                </div>
                <SearchInput />
            </div>
        </nav>
    )
}