import { ADD_TODO, EDIT_TODO, COMPLETE_TODO, DELETE_TODO, UNDO_TODO, ADD_CATEGORY } from '../actions'
import TodoItem from '../components/Todo/todo-item'
// can change state from array to object (with properties like todo list and
// point; need to delete data from local storage if I change object
const todoReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TODO:
            const { title, points, category } = action.payload;
            return [...state, new TodoItem(title, points, category)]

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

        case UNDO_TODO:
            return state.map((item, i) => {
                if (i !== action.payload.index) {
                    return item
                }
                return {...item, completed : !item.completed}
            })

        case ADD_CATEGORY:
            return action.payload.category


        default:
            return state
    }
}

export default todoReducer