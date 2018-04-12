import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <Link to="/" className="navbar-brand">BitShow</Link>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </nav>
    )
}