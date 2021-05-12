import {combineReducers} from 'redux'
import projectReducer from './Reducers/projectReducer.js'
import asyncReducer from './Reducers/asyncReducer.js'

const rootReducer = combineReducers({projectReducer, asyncReducer})

export default rootReducer;
