import React from 'react'

import SearchInput from './../../containers/SearchInput' 

import { Link } from 'react-router-dom'

export const Navigation = () => {

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container">
            <Link to="/" className="navbar-brand">BitShow</Link>
              <SearchInput />
            </div>
        </nav>
    )
}