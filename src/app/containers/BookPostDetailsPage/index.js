import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchBookTextPost,
    fetchBookImagePost,
    fetchBookVideoPost,
 } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { TextPostDetails } from './../../components/TextPostDetails'
import { ImagePostDetails } from './../../components/ImagePostDetails'
import { VideoPostDetails } from './../../components/VideoPostDetails'
import BookPostCommentInput from './../BookPostCommentInput'
import BookPostComments from './../BookPostComments'

import './style.scss'

class BookPostDetails extends Component {

    componentDidMount() {
        this.testTypeForFetch(this.props.match.params.type, this.props.match.params.id)
    }

    testTypeForFetch = (type, id) => {
        if(type === "text") {
            this.props.getBookTextPosts(id)
        } else if (type === "image") {
            this.props.getBookImagePost(id)
        } else if (type === "video") {
            this.props.getBookVideoPost(id)
        }
    }

    pickDisplayCard = () => {
        if(this.props.textPostLoading || this.props.imagePostLoading || this.props.videoPostLoading) {
            return <Loading />
        } else if (this.props.textPostSuccess) {
            return <TextPostDetails post={this.props.textPost}/>
        } else if (this.props.imagePostSuccess) {
            return <ImagePostDetails post={this.props.imagePost}/> 
        } else if (this.props.videoPostSuccess) {
            return <VideoPostDetails post={this.props.videoPost}/> 
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="container">
                {this.pickDisplayCard()}
                <BookPostCommentInput postId={this.props.match.params.id} />
                <BookPostComments postId={this.props.match.params.id}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        textPost: state.bookPostDetailsReducer.fetchedBookTextPost,
        textPostLoading: state.bookPostDetailsReducer.fetchedBookTextPostLoading,
        textPostSuccess: state.bookPostDetailsReducer.fetchedBookTextPostSuccess,
        textPostError: state.bookPostDetailsReducer.fetchedBookTextPostError,

        imagePost: state.bookPostDetailsReducer.fetchedBookImagePost,
        imagePostLoading: state.bookPostDetailsReducer.fetchedBookImagePostLoading,
        imagePostSuccess: state.bookPostDetailsReducer.fetchedBookImagePostSuccess,
        imagePostError: state.bookPostDetailsReducer.fetchedBookImagePostError,

        videoPost: state.bookPostDetailsReducer.fetchedBookVideoPost,
        videoPostLoading: state.bookPostDetailsReducer.fetchedBookVideoPostLoading,
        videoPostSuccess: state.bookPostDetailsReducer.fetchedBookVideoPostSuccess,
        videoPostError: state.bookPostDetailsReducer.fetchedBookVideoPostError,

        }
}

const mapDispatchToProps = dispatch => {
    return {
        getBookTextPosts: id => dispatch(fetchBookTextPost(id)),
        getBookImagePost: id => dispatch(fetchBookImagePost(id)),
        getBookVideoPost: id => dispatch(fetchBookVideoPost(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPostDetails)