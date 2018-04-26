import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { logger } from 'redux-logger'
import { combineReducers } from 'redux'

import { homepageReducer } from './../app/containers/Homepage/reducer'
import { showDetailsReducer } from './../app/containers/ShowDetailsPage/reducer'
import { searchInputReducer } from './../app/containers/SearchInput/reducer'
import { headerReducer } from './../app/containers/Header/reducer'
import { commentsReducer } from './../app/containers/CommentsPage/reducer'
import { showUsersReducer } from './../app/containers/ShowUsersPage/reducer'
import { blogPageReducer } from './../app/containers/BlogPage/reducer'
import { blogPostDetailsReducer } from './../app/containers/BlogPostDetailsPage/reducer'
import { authorsPostsReducer } from './../app/containers/AuthorsPosts/reducer'
import { blogPostAuthorDetailReducer } from './../app/containers/BlogPostAuthorDetailPage/reducer'
import { authorsPageReducer } from './../app/containers/BlogAuthorsPage/reducer'
import { bookFeedReducer } from './../app/containers/BookFeedPage/reducer'
import { textPostModalReducer } from './../app/containers/TextPostModal/reducer'
import { imagePostModalReducer } from './../app/containers/ImagePostModal/reducer'
import { videoPostModalReducer } from './../app/containers/VideoPostModal/reducer'

const rootReducer = combineReducers({
	homepageReducer,
	showDetailsReducer,
	searchInputReducer,
	headerReducer,
	commentsReducer,
	showUsersReducer,
	blogPageReducer,
	blogPostDetailsReducer,
	authorsPostsReducer,
	blogPostAuthorDetailReducer,
	authorsPageReducer,
	bookFeedReducer,
	textPostModalReducer,
	imagePostModalReducer,
	videoPostModalReducer
})
export { rootReducer }

export const store = applyMiddleware(logger, promise(), thunkMiddleware)(createStore)