import { Show } from './../entities/Shows'
import { ShowDetails } from './../entities/ShowDetails'
import { Akas } from './../entities/Akas'
import { Cast } from './../entities/Cast'
import { Season } from './../entities/Season'

export const createShow = (showsArray) => {
    return showsArray.map(show => {
        return new Show(show.id, show.name, show.image)
    })
}

export const createShowDetails = (obj) => {
    return new ShowDetails(obj.id, obj.image, obj.summary, obj.name, obj.akasInstances, obj.castInstances, obj.seasonsInstances)
}

export const createAkas = (arr) => {
    return arr.map(aka => {
        return new Akas(aka.name)
    })
}

export const createCast = (arr) => {
    return arr.map(cast =>{
        return new Cast(cast.person, cast.character)
    })
}

export const createSeasons = (seasons) => {
    return seasons.map(season => {
        return new Season(season.number, season.premiereDate, season.endDate)
    })
}