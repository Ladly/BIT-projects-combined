import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { 
	displayLogin,
	displayRegister,
	registerNewUser,
	userLogin
} from './actions'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { AsideNavigation } from './../../components/AsideNavigation'
import Login from './../Login'
import Register from './../Register'

import { LocalStorageService } from './../../../../services/LocalStorageService'

class LoginPage extends Component {

	activeLoginNavClass = () => {
		return this.props.displayLogin ? 'nav-link active' : 'nav-link'
	}

	activeRegisterNavClass = () => {
		return this.props.displayRegister ? 'nav-link active' : 'nav-link'
	}

	pickComponentToRender = () => {
		return this.props.displayLogin ?
		 <Login userLogin={this.props.loginUser} 
		 addSessionIdToSessionStorage={this.addSessionIdToSessionStorage}
		 goToHomePage={this.goToHomePage}
		 /> : 
		 <Register registerUser={this.props.registerNewUser}/>
	} 

	addSessionIdToSessionStorage = () => {
		if(this.props.loggedInUserSuccess) {
			LocalStorageService.setItemToSessionStorage('sessionId',this.props.loggedInUser.sessionId)
		}
	}

	goToHomePage = () => {
		this.props.history.push('/homepage')
	}

	render() { 
		return (
			<div className="container login-container">
				<div className="login-holder row">
					<section className="col-xs-12 col-sm-12 col-md-6">
						<h1>About</h1>
						<div className="about-text">
							<p>Few paragraphs about app
							few paragraphs about app
							few paragraphs about app
							few paragraphs about app
							few paragraphs about app
							few paragraphs about app</p>
						</div>
					</section>
					<section className="col-xs-12 col-sm-12 col-md-6">
						<nav className="login-nav">
							<ul className="nav nav-tabs">
								<li className="nav-item">
									<div onClick={this.props.displayLoginAction} className={this.activeLoginNavClass()}><h4>Login</h4></div>
								</li>
								<li className="nav-item">
									<div onClick={this.props.displayRegisterAction} className={this.activeRegisterNavClass()}><h4>Register</h4></div>
								</li>
							</ul>
						</nav>
						{this.pickComponentToRender()}
					</section>
				</div>
				<div className="row">
					<section className="login-aside-nav col-md-4 offset-md-4">
						<AsideNavigation />
					</section>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		displayLogin: state.loginPageReducer.displayLogin,
		displayRegister: state.loginPageReducer.displayRegister,
		
		userRegistered: state.loginPageReducer.registeredUser,
		userRegisteredLoading: state.loginPageReducer.registeredUserLoading,
		userRegisteredSuccess: state.loginPageReducer.registeredUserSuccess,
		userRegisteredError: state.loginPageReducer.registeredUserError,
		
		loggedInUser: state.loginPageReducer.userLoggedIn,
		loggedInUserLoading: state.loginPageReducer.userLoggedInLoading,
		loggedInUserSuccess: state.loginPageReducer.userLoggedInSuccess,
		loggedInUserError: state.loginPageReducer.userLoggedInError,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		displayLoginAction: () => dispatch(displayLogin()),
		displayRegisterAction: () => dispatch(displayRegister()),
		registerNewUser: data => dispatch(registerNewUser(data)),
		loginUser: data => dispatch(userLogin(data)),
	}
}

LoginPage.propTypes = {
	displayLogin: PropTypes.bool,
	displayRegister: PropTypes.bool,
	loginUser: PropTypes.func,
	registerNewUser: PropTypes.func,
	loggedInUserSuccess: PropTypes.bool,
	loggedInUser: PropTypes.object,
	history: PropTypes.object,
	displayLoginAction: PropTypes.func,
	displayRegisterAction: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))