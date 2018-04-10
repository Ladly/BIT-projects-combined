import { SHOWS_URL } from './../utils/constants'

import { createShow } from './../utils/helpers'

class ShowsService {
    static fetchShows = () => {
        return fetch(SHOWS_URL)
            .then(shows => shows.json())
            .then(shows => shows.slice(0, 50))
            .then(shows => createShow(shows))
    }
}

export { ShowsService }