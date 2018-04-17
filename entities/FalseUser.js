class FalseUser  {
    constructor(dob, email, gender, name, picture) {
        this.dob = dob
        this.email = email
        this.gender = gender
        this.name = name.first
        this.picture = picture.large
        this.last = name.last
    }
}

export { FalseUser }