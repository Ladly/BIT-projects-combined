import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchFalseUsers } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { UserCard } from './../../components/UserCard'


import './style.scss'

class FalseUsersPage extends Component {

    componentDidMount() {
        this.props.fetchFalseUsers()
    }

    displayUsers = () => {
        if(this.props.falseUsersLoading) {
            return <Loading />
        } else if (this.props.falseUsersSuccess) {
            return this.props.falseUsers.map((falseUser, i) => {
                return <UserCard key={i} falseUser={falseUser}/> 
            })
        } else if (this.props.falseUsersError) {
            return <Error />
        }
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.displayUsers()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        falseUsers: state.falseUsersReducer.fetchedFalseUsers,
        falseUsersLoading: state.falseUsersReducer.fetchedFalseUsersLoading,
        falseUsersSuccess: state.falseUsersReducer.fetchedFalseUsersSuccess,
        falseUsersError: state.falseUsersReducer.fetchedFalseUsersError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFalseUsers: () => dispatch(fetchFalseUsers())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(FalseUsersPage)