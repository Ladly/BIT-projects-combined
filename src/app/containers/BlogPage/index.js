import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchBlogPosts } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { BlogPostListItem } from './../../components/BlogPostListItem'

import './style.scss'

class BlogPage extends Component {

	componentDidMount() {
		this.props.getBlogPosts()
	}

	displayPosts = () => {
		if(this.props.blogPostsLoading) {
			return <Loading />
		} else if(this.props.blogPostsSuccess) {
			return this.props.blogPosts.map(blogPost => {
				return <BlogPostListItem key={blogPost.id}  blogPost={blogPost}/>
			})
		} else {
			return <Error />
		}
	}   

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4 text-center">Blog Posts</h1>
				</div>
				<div className="list-group">
					{this.displayPosts()}
				</div>
			</div>


		)
	}
}

const mapStateToProps = state => {
	return {
		blogPosts: state.blogPageReducer.fetchedBlogPosts,
		blogPostsLoading: state.blogPageReducer.fetchedBlogPostsLoading,
		blogPostsSuccess: state.blogPageReducer.fetchedBlogPostsSuccess,
		blogPostsError: state.blogPageReducer.fetchedBlogPostsError  
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getBlogPosts: () => dispatch(fetchBlogPosts())
	}
}

BlogPage.propTypes = {
	getBlogPosts: PropTypes.func,
	blogPostsLoading: PropTypes.bool,
	blogPostsSuccess: PropTypes.bool,
	blogPosts: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)