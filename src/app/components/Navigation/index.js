import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import SearchInput from './../../containers/SearchInput' 

import './style.scss'

const Navigation = (props) => {

	const displaySearchShow = () => {
		if (props.history.location.pathname === '/homepage') {
			return <SearchInput />
		}
	}

	const displayLogoutButton = () => {
		if(sessionStorage.getItem('sessionId') !== null) {
			return <button  onClick={logout} className="btn btn-sm btn-outline-secondary" type="button">Logout</button>
		}
	}

	const logout = () => {
		sessionStorage.removeItem('sessionId')
	}	

	return (
		<div className="container-fluid bg-dark">
			<div className="container">
				<div className="nav-holder">
					<div className="header">	
						<h2><Link to="/login">BitCombined</Link></h2>				
						<button className="btn btn-secondary btn-sm">Logout</button>
					</div>	
					<nav>
						<ul>
							<li>
								<Link to="/homepage" className="">Home</Link>
							</li>	
							<li>
								<Link to="/bookfeed" className="">Book Feed</Link>
							</li>
							<li>
								<Link to="/bookprofile" className="">Book Profile</Link>
							</li>
							<li>
								<Link to="/bookusers" className="">Book Users</Link>
							</li>				
						</ul> 
					</nav>
				</div>
			</div>
		</div>	
	)
}

Navigation.propTypes = {
	history: PropTypes.object
}

export default withRouter(Navigation)