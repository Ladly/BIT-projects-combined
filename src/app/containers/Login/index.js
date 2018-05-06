import React, { Component } from 'react'
import connect from 'react-redux'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

class Login extends Component {

    state = {
        usernameValue: "",
        passwordValue: ""
    }

    createBody = () => {
        const body = {
            username: this.state.usernameValue,
            password: this.state.passwordValue
        }

        return body
    }

    handleChange = e => {
        if(e.target.name === 'username') {
            this.setState({usernameValue: e.target.value})
        } else if(e. target.name === 'password') {
            this.setState({passwordValue: e.target.value})
        }
    }

    postData = () => {
        this.props.userLogin(this.createBody())
            .then(() => this.props.addSessionIdToSessionStorage())
    }

    render() {  
        return (
            <div className="login-component">
                <input onChange={this.handleChange} value={this.state.usernameValue} type="text" className="form-control" placeholder="Username" name="username" />
                <input onChange={this.handleChange} value={this.state.passwordValue} type="password" className="form-control" placeholder="Password" name="password" />
                <hr />
                <button onClick={this.postData} className="btn btn-primary btn-block">Login</button>
            </div>
        )
    }
}


export default Login