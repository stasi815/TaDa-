export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UNDO_TODO = 'UNDO_TODO'
export const CLEAR_TOTAL = 'CLEAR_TOTAL'
export const ADD_CATEGORY = 'ADD_CATEGORY'

export const addTodo = (title, points, category) => {
    return {
        type: ADD_TODO,
        payload: { title, points, category }
    }
}

export const editTodo = (index, title) => {
    return {
        type: EDIT_TODO,
        payload: { index, title }
    }
}

export const completeTodo = (index, points) => {
    return {
        type: COMPLETE_TODO,
        payload: { index, points }
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: { index }
    }
}

export const undoTodo = (index, points) => {
    return {
        type: UNDO_TODO,
        payload: { index, points }
    }
}

export const clearTotal = () => {
    return {
        type: CLEAR_TOTAL,
    }
}

export const addCategory = (category) => {
    return {
        type: ADD_CATEGORY,
        payload: { category }
    }
}


