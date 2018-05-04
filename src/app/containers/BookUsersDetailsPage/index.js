import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchUserProfile } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { BookUserProfile } from './../../components/BookUserProfile'

import './style.scss'

class BookUsersDetailsPage extends Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.id)
    }

    displayUser = () => {
        if(this.props.userProfileLoading) {
            return <Loading />
        } else if (this.props.userProfileSuccess) {
            return <BookUserProfile profile={this.props.userProfile}/>
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="container">
                {this.displayUser()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.bookUsersDetailsPageReducer.fetchedUserProfile,
        userProfileLoading: state.bookUsersDetailsPageReducer.fetchedUserProfileLoading,
        userProfileSuccess: state.bookUsersDetailsPageReducer.fetchedUserProfileSuccess,
        userProfileError: state.bookUsersDetailsPageReducer.fetchedUserProfileError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (id) => dispatch(fetchUserProfile(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookUsersDetailsPage)