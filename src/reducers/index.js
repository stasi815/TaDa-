import { combineReducers } from 'redux'
import todoReducer from './todos-reducer'
import totalReducer from './total-reducer'
import pointsReducer from './points-reducer'
import categoryReducer from './category-reducer'

export default combineReducers(
    {
        todos: todoReducer,
        total: totalReducer,
        points: pointsReducer,
        category: categoryReducer,
    }
)