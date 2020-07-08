import { COMPLETE_TODO, DELETE_TODO, UNDO } from '../actions'

export default function (state = 0, action) {
    switch(action.type) {
        case COMPLETE_TODO:
            state += 1
            return state

        case DELETE_TODO:
            if(state > 0) {
                state -= 1
            }
            return state

        case UNDO:
            if(state > 0) {
                state -= 1
            }
            return state

        default:
            return state
    }
}