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
						{displayLogoutButton()}
					</div>	
					<nav>
						<ul>
							<li>
								<Link to="/homepage">Home</Link>
							</li>	
							<li>
								<Link to="/bookfeed">Book Feed</Link>
							</li>
							<li>
								<Link to="/bookprofile">Book Profile</Link>
							</li>
							<li>
								<Link to="/bookusers">Book Users</Link>
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