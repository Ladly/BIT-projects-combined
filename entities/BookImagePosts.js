import { BookPosts } from './BookPosts'

class BookImagePosts extends BookPosts {
	constructor(commentsNum, dataCreated, id,  userDisplayName, userId, imageUrl, type) {
		super(commentsNum, dataCreated, id,  userDisplayName, userId)
		this.commentsNum = commentsNum
		this.created = dataCreated
		this.id = id
		this.user = userDisplayName
		this.userId = userId
		this.imageUrl = imageUrl
		this.type = type
	}
}

export { BookImagePosts }