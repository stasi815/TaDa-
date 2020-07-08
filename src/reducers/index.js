import { combineReducers } from 'redux'
import todoReducer from './todos-reducer'
import totalReducer from './total-reducer'

export default combineReducers(
    {
        todos: todoReducer,
        total: totalReducer
    }
)