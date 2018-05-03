import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import './style.scss'

import { 
    fetchProfile,
    displayUpdateProfileModal,
    hideUpdateProfileModal
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { BookUserProfile } from './../../components/BookUserProfile'
import BookProfileUpdateModal from './../BookProfileUpdateModal'


class BookProfilePage extends Component {

    componentDidMount() {
        this.props.getProfile()
    }

    displayUpdateModal = () => {
        return (this.props.displayModal) ? this.props.hideModalAction() : this.props.displayModalAction()
    }

    displayProfile = () => {      
        if(this.props.profileLoading) {          
            return <Loading />
        } else if (this.props.profileSuccess) {
            return (
                <Fragment>
                    <div className="profile-main">
                        <BookUserProfile profile={this.props.profile} displayModal={this.displayUpdateModal}/>
                    </div>
                    <BookProfileUpdateModal 
                        display={this.props.displayModal} 
                        profile={this.props.profile} 
                        hideModal={this.props.hideModalAction}
                        getProfile={this.props.getProfile}
                    />
                </Fragment>
            )
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="container">
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
        displayModal: state.bookProfilePageReducer.displayUpdateProfileModal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: () => dispatch(fetchProfile()),	
        displayModalAction: () => dispatch(displayUpdateProfileModal()),	
        hideModalAction: () => dispatch(hideUpdateProfileModal()),	
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookProfilePage)
