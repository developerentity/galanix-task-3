export const universitiesAPI = {
    getUniversities(countryName) {
        return fetch(`http://universities.hipolabs.com/search?name=middle&country=${countryName}`)
    }
}