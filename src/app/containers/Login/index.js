import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

class Login extends Component {

    render() {  
        return (
            <div className="login-component">
                <input onChange={this.handleChange} type="text" className="form-control" placeholder="Username"/>
                <input onChange={this.handleChange} type="password" className="form-control" placeholder="Password"/>
                <hr />
                <button className="btn btn-primary btn-block">Login</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const showDetails = state.showDetailsReducer
return {
        showDetailsLoading: showDetails.fetchedShowDetailsLoading,
        showDetailsSuccess: showDetails.fetchedShowDetailsSuccess,
        showDetailsError: showDetails.fetchedShowDetailsError,
        showDetails: showDetails.showDetailsAndCast,
    }
}

const mapDispatchToProps = dispatch => {
return {
        detailsAndCast: query => dispatch(fetchShowDetailsAndCast(query)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)