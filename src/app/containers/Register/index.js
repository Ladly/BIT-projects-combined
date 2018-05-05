import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

class LoginPage extends Component {

    render() {  
        return (
            <div className="register-component">
                <input onChange={this.handleChange} type="text" className="form-control" placeholder="Username"/>
                <input onChange={this.handleChange} type="password" className="form-control" placeholder="Password"/>
                <input onChange={this.handleChange} type="text" className="form-control" placeholder="Name"/>
                <input onChange={this.handleChange} type="email" className="form-control" placeholder="E-mail"/>
                <hr />
                <button className="btn btn-primary btn-block">Register</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
