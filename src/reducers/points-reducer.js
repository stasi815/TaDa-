import { ADD_TODO } from '../actions'

export default function (state = 0, action) {
    switch(action.type) {
        case ADD_TODO:
            state += action.payload.points
            return state

        default:
            return state
    }
}