import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    displayLogin,
    displayRegister
} from './actions'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import Login from './../Login'
import Register from './../Register'

class LoginPage extends Component {

    activeLoginNavClass = () => {
            return this.props.displayLogin ? "nav-link active" : "nav-link"
    }

    activeRegisterNavClass = () => {
            return this.props.displayRegister ? "nav-link active" : "nav-link"
    }

    pickComponentToRender = () => {
        return this.props.displayLogin ? <Login /> : <Register />
    } 


    render() {  
        return (
            <div className="container">
                <div className="login-holder col-sm-8 offset-sm-1">
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
return {
        displayLogin: state.loginPageReducer.displayLogin,
        displayRegister: state.loginPageReducer.displayRegister,
    }
}

const mapDispatchToProps = dispatch => {
return {
        displayLoginAction: () => dispatch(displayLogin()),
        displayRegisterAction: () => dispatch(displayRegister()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)