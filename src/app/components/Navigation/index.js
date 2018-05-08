import React from 'react'

import SearchInput from './../../containers/SearchInput' 

import { Link } from 'react-router-dom'

export const Navigation = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">BitCombined</Link> 
				<div id="navbarNav"> 
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/homepage" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/showusers" className="nav-link">Show users</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link">Blog</Link>
						</li>
						<li className="nav-item">
							<Link to="/blogauthors" className="nav-link">Blog Authors</Link>
						</li>
						<li className="nav-item">
							<Link to="/bookfeed" className="nav-link">Book Feed</Link>
						</li>
						<li className="nav-item">
							<Link to="/bookprofile" className="nav-link">Book Profile</Link>
						</li>
						<li className="nav-item">
							<Link to="/bookusers" className="nav-link">Book Users</Link>
						</li>
					</ul>
				</div>
				<SearchInput />
			</div>
		</nav>
	)
}