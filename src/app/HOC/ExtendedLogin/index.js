import React, { Component } from 'react'

import LoginPage from './../../containers/LoginPage'

export const ExtendedLogin = (ComponentToRender) => {
    return class ExtendedLogin extends Component {

        testStorage = () => {
            console.log()
            if(sessionStorage.getItem('sessionId') === null) {
                return <LoginPage />
            } else {
                return <ComponentToRender />
            }

        }

        render () {
            return (
                    <React.Fragment>
                       {this.testStorage()}
                    </React.Fragment>
                 )
        }
    }
}