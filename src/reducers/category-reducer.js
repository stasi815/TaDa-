import { ADD_TODO } from '../actions'


const categoryReducer = (state=" ", action) => {
    switch (action.type) {
        case ADD_TODO:
            state = `${action.payload.category}`
            return state

        default:
            return state
    }
}

export default categoryReducer