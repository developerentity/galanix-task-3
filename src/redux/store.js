import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import universityReducer from './universitiesReducer'

const store = createStore(universityReducer, applyMiddleware(thunkMiddleware))

export default store
