import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, undo } from '../../actions'

function SingleTodo(props) {
    const dispatch = useDispatch()
    const buttonStyle = {
        backgroundColor: 'green',
    }
    if (props.completed === true) {
        buttonStyle.backgroundColor = 'red'
    }
    return (
        <div>
            Todo: {props.title}
            <button
                style={buttonStyle}
                onClick={(e) => {
                    dispatch(completeTodo(props.index))
                }}>{ props.completed ? 'Done!' : 'Complete' }
            </button>
            <button
                onClick={(e) => {
                    dispatch(undo(props.index))
                }}>Undo</button>
            <button
                onClick={(e) => {
                    dispatch(deleteTodo(props.index))
                }}>Delete</button>
        </div>
    )
}

export default SingleTodo