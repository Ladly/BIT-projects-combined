class LocalStorageService {
    static addItemLocalStorage = (key, item) => {
        const itemToStore = JSON.stringify(item)
        localStorage.setItem(key, itemToStore)
    }

    static getItemFromLocalStorage = (key) => {
        return JSON.parse(localStorage.getItem(key))
    }
}

export { LocalStorageService }