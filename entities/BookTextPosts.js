import { BookPosts } from './BookPosts'

class BookTextPosts extends BookPosts {
	constructor(commentsNum, dateCreated, id, userDisplayName, userId, text, type) {
		super(commentsNum, dateCreated, id, userDisplayName, userId)
		this.commentsNum = commentsNum
		this.dateCreated = dateCreated
		this.id = id
		this.user = userDisplayName
		this.userId = userId
		this.text = text
		this.type = type
	}
}

export { BookTextPosts }