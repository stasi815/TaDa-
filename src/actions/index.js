export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UNDO = 'UNDO'

export const addTodo = (title, todo) => {
    return {
        type: ADD_TODO,
        payload: { title, todo }
    }
}

export const editTodo = (index, title, todo) => {
    return {
        type: EDIT_TODO,
        payload: { index, title, todo }
    }
}

export const completeTodo = (index) => {
    return {
        type: COMPLETE_TODO,
        payload: { index }
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: { index }
    }
}

export const undo = (index) => {
    return {
        type: UNDO,
        payload: { index }
    }
}




