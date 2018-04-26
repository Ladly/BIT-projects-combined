import { bookVideoPostUrlToEmbed } from './helpers'

const validateLength = (string, length) => {
    return (string.length > length) ? true : false 
}

const validateStart = (string, arrOfStarters) => {
    return arrOfStarters.some(elem => {
        return string.startsWith(elem)
    })
}

const validateEnd = (string, arrOfEnders) => {
    return arrOfEnders.some(elem => {
        return string.endsWith(elem)
    })
}

export const validateBookImagePostUrl = (url) => {
    const imageUrlStarters = ['http://', 'https://']
    const imageUrlEnders = ['.jpg', '.png', '.gif']
    const imageUrlLength = 12
    let result = ""

    const testStarters = validateStart(url, imageUrlStarters) 
    const testEnders = validateEnd(url, imageUrlEnders) 
    const testLength = validateLength(url, imageUrlLength)

    if(testStarters && testEnders && testLength === true) {
        result = true
    } else {
      result = false
    }

    return result
}

export const validateBookTextPost = (string) => {
    const textLength = 6

    return validateLength(string, textLength) ? true : false
}

export const validateBookVideoPost = (url) => {
    const videoUrlLength = 40
    const videoUrlStarters = ['https://www.youtube.com/']
    let result = ''

    const testLength = validateLength(url, videoUrlLength)
    const testStarters = validateStart(url, videoUrlStarters)

    if(testLength && testStarters === true) {
        result = true
    } else {
        result = false
    }

    return result
}