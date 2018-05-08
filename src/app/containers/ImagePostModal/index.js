import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { postImageData } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import { validateBookImagePostUrl } from './../../../../utils/validations'

import './style.scss'

class ImagePostModal extends Component {
	constructor() {
		super()
		this.state={
			value: '',
		}
	}

	handleChange = (e) => {
		this.setState({value: e.target.value})
	}

	postData = () => {
		if(validateBookImagePostUrl(this.state.value)) {
			this.props.postImgData(this.state.value)
				.then(()=> {
					if(this.props.postDataLoading) {
						return <Loading /> 
					} else if (this.props.postDataSuccess) {
						this.clearAndHide()
						this.props.getBookPosts()
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
				<input type="url" className="form-control" placeholder="Add image url" onChange={this.handleChange} value={this.state.value}/>
				<hr />
				<button onClick={this.clearAndHide} className="btn btn-primary cancel">Cancel</button>
				<button onClick={this.postData} className="btn btn-primary float-right add">Post</button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		postDataLoading: state.imagePostModalReducer.postImageLoading,
		postDataSuccess: state.imagePostModalReducer.postImageSuccess,
		postDataError: state.imagePostModalReducer.postImageError,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		postImgData: data => dispatch(postImageData(data))
	}
}

ImagePostModal.propTypes = {
	postImgData: PropTypes.func,
	postDataLoading: PropTypes.bool,
	postDataSuccess: PropTypes.bool,
	getBookPosts: PropTypes.func,
	display: PropTypes.bool,
	hideModal: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePostModal)
