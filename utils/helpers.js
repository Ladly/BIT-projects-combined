import { Show } from './../entities/Shows'
import { ShowDetails } from './../entities/ShowDetails'
import { Akas } from './../entities/Akas'
import { Cast } from './../entities/Cast'
import { Season } from './../entities/Season'
import { Crew } from './../entities/Crew'
import { Episode } from './../entities/Episode'
import { FalseUser } from './../entities/FalseUser'

export const createShow = (showsArray) => {
    return showsArray.map(show => {
        return new Show(show.id, show.name, show.image, show.rating)
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

export const createCrew = (crew) => {
    return crew.map(member => {
        return new Crew(member.type, member.person)
    })
}

export const createEpisodes = (episodes) => {
    return episodes.map(episode => {
        return new Episode(episode.id, episode.name, episode.season, episode.number, episode.summary)
    })
}

export const selectThreeTopShows = (showsArray) => {
    const sorted = showsArray.sort((a, b) => {
        return a.rating.average - b.rating.average
    })

    return sorted.reverse()
}

export const getSeasonEpisodes = (episodesArray, seasonNumber) => {
    return episodesArray.filter(episode => {
        return episode.season === seasonNumber
    })
}

export const createFalseUser = (usersArray) => {
    return usersArray.map(user => {
        const formatedDate = formatDate(user.dob)
        const hiddenEmail = hideEmail(user.email)
        return new FalseUser(formatedDate, hiddenEmail, user.gender, user.name, user.picture, user.last)
    })
}

export const hideEmail = (email) => {
    const firstPart = email.slice(0,3)
    const endPart = email.slice(email.indexOf('@') )

    const hiddenEmail = `${firstPart}...${endPart}`
    return hiddenEmail
}

export const formatDate = (date) => {
    const newDate = new Date(date)
    const birthday = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()

    const formatedDate = `${birthday}.${month}.${year}`
    return formatedDate
}


