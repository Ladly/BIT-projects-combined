import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postUpdatedData } from './actions'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'


class BookProfileUpdate extends Component {
    state = {
        nameValue: this.props.profile.name,
        aboutShortValue: this.props.profile.aboutShort,
        avatarUrlValue: this.props.profile.avatarUrl
    }

    hideModal = () => {
        return (!this.props.display) ? "book-update-profile-modal my-modal hidden" : "book-update-profile-modal my-modal"
    }

    postData = () => {
        const body = {
            userId: this.props.profile.userId,
            name: this.state.nameValue,
            email: this.props.profile.email,
            aboutShort: this.state.aboutShortValue,
            about: this.props.profile.about,
            avatarUrl: this.state.avatarUrlValue,
            postsCount: this.props.profile.postsCount,
            commentsCount: this.props.profile.commentsCount
          }

        this.props.postData(body)
            .then(() => {
                if(this.props.updatedProfileSuccess) {
                    this.props.getProfile()  
                }
            })

        this.resetAndHide()
    }

    handleChange = e => {
       const target = e.target 
       const value = e.target.value
        if(target.name === 'name'){
            this.setState({nameValue: value})
        } else if (target.name === 'about') {
            this.setState({aboutShortValue: value})
        } else if (target.name === 'avatar') {
            this.setState({avatarUrlValue: value})
        }        
    }

    resetAndHide = () => {
        this.setState({
            nameValue: this.props.profile.name,
            aboutShortValue: this.props.profile.aboutShort,
            avatarUrlValue: this.props.profile.avatarUrl
        }, () => this.props.hideModal())        
    }

    render() {
        return (
            <div className={this.hideModal()}>
                    <input onChange={this.handleChange} type="text" className="form-control" value={this.state.nameValue} name="name" />
                    <input onChange={this.handleChange} type="text" className="form-control" value={this.state.aboutShortValue} name="about" />
                    <input onChange={this.handleChange} type="url" className="form-control" value={this.state.avatarUrlValue} name="avatar" />
                <hr />
                <button onClick={this.resetAndHide} className="btn btn-primary cancel">Cancel</button>
                <button onClick={this.postData} className="btn btn-primary float-right add">Post</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        updatedProfile: state.bookProfileUpdateModalReducer.updateProfile,
        updatedProfileLoading: state.bookProfileUpdateModalReducer.updateProfileLoading,
        updatedProfileSuccess: state.bookProfileUpdateModalReducer.updateProfileSuccess,
        updatedProfileError: state.bookProfileUpdateModalReducer.updateProfileError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postData: (data) => dispatch(postUpdatedData(data)),	
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookProfileUpdate)