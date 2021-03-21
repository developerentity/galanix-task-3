export const localStorageHelper = {
    setLocalData(storage_name, arr) {
        localStorage.setItem(storage_name, JSON.stringify(arr))
    },
    getLocalData(storage_name) {
        return JSON.parse(localStorage.getItem(storage_name))
    },
}