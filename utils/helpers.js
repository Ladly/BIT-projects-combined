import { Show } from './../entities/Shows'

export const createShow = (showsArray) => {
    return showsArray.map(show => {
        return new Show(show.id, show.name, show.image)
    })
}