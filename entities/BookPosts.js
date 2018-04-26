class BookPosts {
    constructor(commentsNum, dateCreated, id, userDisplayName, userId) {
        this.commentsNum = commentsNum
        this.dateCreated = dateCreated
        this.id = id
        this.user = userDisplayName
        this.userId = userId
    }
}

export { BookPosts }