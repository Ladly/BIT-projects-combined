import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { postVideoData } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import { bookVideoPostUrlToEmbed } from './../../../../utils/helpers'
import { validateBookVideoPost } from './../../../../utils/validations'

import './style.scss'

class VideoPostModal extends Component {
    constructor() {
        super()
        this.state={
            value: "",
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    postData = () => {
        const formatedUrl = bookVideoPostUrlToEmbed(this.state.value)
        if(validateBookVideoPost(formatedUrl)) {
            this.props.postVidData(formatedUrl)
                .then(()=> {
                    if(this.props.postDataLoading) {
                        return <Loading /> 
                    } else if (this.props.postDataSuccess) {
                        this.clearAndHide()
                    } else {
                        return <Error />
                    }
                })
        } else {
            alert('Invalid url')
            this.clearAndHide()
        }
    }

    hideModal = () => {
        return this.props.display ? 'my-modal' : 'my-modal hidden'
    }

    clearAndHide = () => {        
        this.setState({value: ''}, () => this.props.hideModal())
    }

    render() {
        return (
            <div className={this.hideModal()}>
                <input type="text" className="form-control" placeholder="Add video url" onChange={this.handleChange} value={this.state.value}/>
                <hr />
                <button onClick={this.clearAndHide} className="btn btn-primary cancel">Cancel</button>
                <button onClick={this.postData} className="btn btn-primary float-right add">Post</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        postDataLoading: state.videoPostModalReducer.postVideoLoading,
        postDataSuccess: state.videoPostModalReducer.postVideoSuccess,
        postDataError: state.videoPostModalReducer.postVideoError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postVidData: data => dispatch(postVideoData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPostModal)
