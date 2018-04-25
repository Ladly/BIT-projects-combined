import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { postTextData } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class TextPostModal extends Component {
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
        this.props.postTxtData(this.state.value)
            .then(()=> {
                if(this.props.postDataLoading) {
                    return <Loading /> 
                } else if (this.props.postDataSuccess) {
                    this.clearAndHide()
                } else {
                    return <Error />
                }
            })
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
                <input type="text" className="form-control" placeholder="Add text post" onChange={this.handleChange} value={this.state.value}/>
                <hr />
                <button onClick={this.clearAndHide} className="btn btn-primary cancel">Cancel</button>
                <button onClick={this.postData} className="btn btn-primary float-right add">Post</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        postDataLoading: state.textPostModalReducer.postDataLoading,
        postDataSuccess: state.textPostModalReducer.postDataSuccess,
        postDataError: state.textPostModalReducer.postDataError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postTxtData: data => dispatch(postTextData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextPostModal)
