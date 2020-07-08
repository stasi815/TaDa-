import { ADD_TODO, EDIT_TODO, COMPLETE_TODO, DELETE_TODO, UNDO } from '../actions'
import TodoItem from '../components/Todo/todo-item'
// can change state from array to object (with properties like todo list and
// point; need to delete data from local storage if I change object
const todoReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TODO:
            const { title, todo } = action.payload;
            return [...state, new TodoItem(title)]

        case EDIT_TODO:
            return state.map((item, i) => {
                if (i !== action.payload.index) {
                    return item
                }
                return {...item, ...action.payload}
            })

        case COMPLETE_TODO:
            return state.map((item, i) => {
                if (i !== action.payload.index) {
                    return item
                }
                return {...item, completed : !item.completed}
            })

        case DELETE_TODO:
            const { index } = action.payload
            return [...state.slice(0, index), ...state.slice(index +1)]

        case UNDO:
            return state.map((item, i) => {
                if (i !== action.payload.index) {
                    return item
                }
                return {...item, completed : !item.completed}
            })


        default:
            return state
    }
}

export default todoReducer