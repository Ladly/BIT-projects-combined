class BookPostComments {
    constructor(id, dateCreated, body, postId, authorName, authorId) {
        this.id = id
        this.created = dateCreated
        this.comment = body
        this.postId = postId
        this.authorName = authorName
        this.authorId = authorId
    }
}

export { BookPostComments } 