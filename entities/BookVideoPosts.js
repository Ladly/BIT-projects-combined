import { BookPosts } from './BookPosts'

class BookVideoPosts extends BookPosts {
	constructor(commentsNum, dataCreated, id,  userDisplayName, userId, videoUrl, type) {
		super(commentsNum, dataCreated, id,  userDisplayName, userId)
		this.commentsNum = commentsNum
		this.created = dataCreated
		this.id = id
		this.user = userDisplayName
		this.userId = userId
		this.videoUrl = videoUrl
		this.type = type
	}
}

export { BookVideoPosts }