import { universitiesAPI } from "../api/api"

const SET_UNIVERSITIES = "SET_UNIVERSITIES"

const initialState = {
    universities: []
}

const universitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNIVERSITIES:
            return {
                ...state, universities: action.universities
            }

        default:
            return state
    }
}

export const setUniversities = (universities) => {
    return { type: SET_UNIVERSITIES, universities }
}

export const getUniversities = (countryName) => {
    return async dispatch => {
        try {
            const res = await universitiesAPI.getUniversities(countryName)
            const data = await res.json()
            dispatch(setUniversities(data))
        } catch (err) {
            console.error(err)
        }
    }
}

export default universitiesReducer