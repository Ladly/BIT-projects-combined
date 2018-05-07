import React, { Component } from 'react'
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
import Login from './../Login'
import Register from './../Register'

import { LocalStorageService } from './../../../../services/LocalStorageService'

class LoginPage extends Component {

    activeLoginNavClass = () => {
            return this.props.displayLogin ? "nav-link active" : "nav-link"
    }

    activeRegisterNavClass = () => {
            return this.props.displayRegister ? "nav-link active" : "nav-link"
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
        console.log(this.props) 
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))