class ShowDetails {
    constructor(id, image, summary, name, akasInstances, castInstances, seasonsInstances) {
        this.id = id
        this.image = image.medium
        this.summary = summary
        this.name = name
        this.akasInstances = akasInstances
        this.castInstances = castInstances
        this.seasonsInstances = seasonsInstances

    }
}

export { ShowDetails }