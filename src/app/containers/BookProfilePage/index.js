import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'

import { fetchProfile } from './actions'


import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { BookUserProfile } from './../../components/BookUserProfile'


class BookProfilePage extends Component {

    componentDidMount() {
        this.props.getProfile()
    }

    displayProfile = () => {      
        if(this.props.profileLoading) {          
            return <Loading />
        } else if (this.props.profileSuccess) {
            return <BookUserProfile profile={this.props.profile}/>
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="container profile-main">
                {this.displayProfile()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.bookProfilePageReducer.fetchedProfile,
        profileLoading: state.bookProfilePageReducer.fetchedProfileLoading,
        profileSuccess: state.bookProfilePageReducer.fetchedProfileSuccess,
        profileError: state.bookProfilePageReducer.fetchedProfileError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: () => dispatch(fetchProfile()),	
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookProfilePage)
