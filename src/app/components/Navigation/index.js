import React from 'react'

export const Navigation = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">BitShow</a>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
    )
}