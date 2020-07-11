import { COMPLETE_TODO, UNDO_TODO, CLEAR_TOTAL } from '../actions'

export default function (state = 0, action) {
    switch(action.type) {
        case COMPLETE_TODO:
            state += action.payload.points
            return state

        case UNDO_TODO:
            if(state > 0) {
                state -= action.payload.points
            }
            return state

        case CLEAR_TOTAL:
            return 0

        default:
            return state
    }
}