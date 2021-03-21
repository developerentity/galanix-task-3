import { universitiesAPI } from "../api/api"

const SET_UNIVERSITIES = "SET_UNIVERSITIES"
const SET_SAVED = "SET_SAVED"
const ADD_TO_SAVED = "ADD_TO_SAVED"
const REMOVE_FROM_SAVED = "REMOVE_FROM_SAVED"

const initialState = {
    saved: [],
    universities: []
}

const universitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNIVERSITIES:
            return {
                ...state, universities: action.universities
            }

        case SET_SAVED:
            return {
                ...state, saved: [...action.arr]
            }

        case ADD_TO_SAVED:
            return {
                ...state, saved: [...state.saved.concat(action.uni)]
            }

        case REMOVE_FROM_SAVED:
            return {
                ...state, saved: [...state.saved.filter(u => u.name !== action.name)]
            }

        default:
            return state
    }
}

export const setUniversities = (universities) => {
    return { type: SET_UNIVERSITIES, universities }
}

export const setSaved = (arr) => {
    return { type: SET_SAVED, arr }
}

export const addToSaved = (uni) => {
    return { type: ADD_TO_SAVED, uni }
}

export const removeFromSaved = (name) => {
    return { type: REMOVE_FROM_SAVED, name }
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