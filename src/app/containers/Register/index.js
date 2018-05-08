import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

class LoginPage extends Component {

	state = {
		usernameValue: '',
		passwordValue: '',
		nameValue: '',
		emailValue: ''
	}

	createBody = () => {
		const body = {
			username: this.state.usernameValue,
			password: this.state.passwordValue,
			name: this.state.nameValue,
			email: this.state.emailValue
		}

		return body
	}

	handleChange = e => {
		if(e.target.name === 'username') {
			this.setState({usernameValue: e.target.value})
		} else if (e.target.name === 'password') {
			this.setState({passwordValue: e.target.value})
		} else if (e.target.name === 'name') {
			this.setState({nameValue: e.target.value})
		} else if (e.target.name === 'email') {
			this.setState({emailValue: e.target.value})
		}
	}

	render() {  
		return (
			<div className="register-component">
				<input onChange={this.handleChange} value={this.state.usernameValue} type="text" className="form-control" placeholder="Username" name="username" />
				<input onChange={this.handleChange} value={this.state.passwordValue} type="password" className="form-control" placeholder="Password" name="password"/>
				<input onChange={this.handleChange} value={this.state.nameValue} type="text" className="form-control" placeholder="Name" name="name"/>
				<input onChange={this.handleChange} value={this.state.emailValue} type="email" className="form-control" placeholder="E-mail" name="email"/>
				<hr />
				<button onClick={() => this.props.registerUser(this.createBody())} className="btn btn-primary btn-block">Register</button>
			</div>
		)
	}
}

LoginPage.propTypes = {
	registerUser: PropTypes.function
}

export default LoginPage
