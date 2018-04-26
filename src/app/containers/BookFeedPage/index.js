import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchBookPosts,
    displayTextModal,
    hideTextModal,
    displayImageModal,
    hideImageModal,
    displayVideoModal,
    hideVideoModal
 } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import TextPostModal  from './../TextPostModal'
import ImagePostModal  from './../ImagePostModal'
import VideoPostModal  from './../VideoPostModal'

import './style.scss'

class BookFeedPage extends Component {

    componentDidMount() {
        this.props.getBookPosts()
    }

    displayPosts = () => {
        if(this.props.postsLoading) {
            return <Loading />
        } else if (this.props.postsSuccess) {
            return 'success'
        } else {
            return <Error />
        }
    }
    
    displayTxtModal = () => {
        return this.props.textModal ? this.props.hideTextModal() : this.props.displayTextModal()
    }

    displayImgModal = () => {
        return this.props.imageModal ? this.props.hideImageModal() : this.props.displayImageModal()
    }

    displayVidModal = () => {
        return this.props.videoModal ? this.props.hideVideoModal() : this.props.displayVideoModal()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button onClick={this.displayTxtModal} className="btn btn-primary col-4">Add text post</button>
                    <button onClick={this.displayImgModal} className="btn btn-primary col-4">Add image post</button>
                    <button onClick={this.displayVidModal} className="btn btn-primary col-4">Add video post</button>
                </div>
                <TextPostModal display={this.props.textModal} hideModal={this.props.hideTextModal}/>
                <ImagePostModal display={this.props.imageModal} hideModal={this.props.hideImageModal}/>
                <VideoPostModal display={this.props.videoModal} hideModal={this.props.hideVideoModal}/>
                {this.displayPosts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.bookFeedReducer.fetchedBookShows,
        postsLoading: state.bookFeedReducer.fetchedBookShowsLoading,
        postsSuccess: state.bookFeedReducer.fetchedBookShowsSuccess,
        postsError: state.bookFeedReducer.fetchedBookShowsError,
        textModal: state.bookFeedReducer.displayTextModal,
        imageModal: state.bookFeedReducer.displayImageModal,
        videoModal: state.bookFeedReducer.displayVideoModal
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getBookPosts: () => dispatch(fetchBookPosts()),
        displayTextModal: () => dispatch(displayTextModal()),
        hideTextModal: () => dispatch(hideTextModal()),
        displayImageModal: () => dispatch(displayImageModal()),
        hideImageModal: () => dispatch(hideImageModal()),
        displayVideoModal: () => dispatch(displayVideoModal()),
        hideVideoModal: () => dispatch(hideVideoModal())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFeedPage)