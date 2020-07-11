import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, undoTodo } from '../../actions'
import './show-todo.css'
function ShowTodo(props) {
    const { index, completed, title, points } = props
    const dispatch = useDispatch()
    const buttonClass = completed ? 'done' : 'completed'
    return (
        <div className='todo'>
            <p className='title'>{ title }</p>
            <p className='points'>{ points }</p>
            <div className='buttons'>
                <button
                    className= {`${buttonClass}`}
                    onClick={(e) => {
                        if(completed){
                            dispatch(undoTodo(index, points))
                        } else {
                            dispatch(completeTodo(index, points))
                        }
                    }}>{ completed ? 'Done!' : 'Complete' }
                </button><div className='vertical'></div>
                <button
                    className='delete-button'
                    onClick={(e) => {
                        dispatch(deleteTodo(index))
                    }}>Delete</button>
            </div>
        </div>
    )
}

export default ShowTodo