import { BOOK_POSTS_URL } from './../utils/constants'
import { GETOPTIONS } from './../utils/restOptions'

class BookPostServices {
    static fetchBookPosts = () => {
        return fetch(BOOK_POSTS_URL, GETOPTIONS)
            .then(posts => posts.json())
    }
}


export { BookPostServices }