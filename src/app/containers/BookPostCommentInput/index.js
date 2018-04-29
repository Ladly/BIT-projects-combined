import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { postData } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class BookPostCommentInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    postData = () => {
        this.props.postData(this.state.value, this.props.postId)
            .then(() => {
                if (this.props.postDataSuccess) {
                    this.clearInput()
                } 
        })
    }

    displayNotation = () => {
        if(this.props.postDataLoading) {
            return <Loading />
        } else if(this.props.postDataError){
            return <Error />
        }
    }

    clearInput = () => {        
        this.setState({value: ''})
    }

    disableButton = () => {
        return (this.state.value.length <= 3)
    }

    render() {
        return (
            <div className="input-holder">
                <input type="text" className="form-control" placeholder="Add comment" onChange={this.handleChange} value={this.state.value}/>
                <button disabled={this.disableButton()} onClick={this.postData} className="btn btn-primary btn-block">Post comment</button>
                {this.displayNotation()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        postDataLoading: state.bookPostCommentInputReducer.postDataLoading,
        postDataSuccess: state.bookPostCommentInputReducer.postDataSuccess,
        postDataError: state.bookPostCommentInputReducer.postDataError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postData: (data, id) => dispatch(postData(data, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPostCommentInput)
