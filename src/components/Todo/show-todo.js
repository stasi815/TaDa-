import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, undoTodo } from '../../actions'
import './show-todo.css'

function checkMark() {
    return (
        <div class="check"></div>
    )
}

function ShowTodo(props) {
    const { index, completed, title, points, category } = props
    const dispatch = useDispatch()
    const buttonClass = completed ? 'done' : 'completed'
    const check = checkMark()
    return (
        <div className='todo'>
            <div>{ completed ? check : '' }</div>
            <p className='title'>{ title }</p>
            <p className='points'>{ points }</p>
            <p className='category'>{ category }</p>
            <div className='buttons'>
                <button
                    className= {`${buttonClass}`}
                    onClick={(e) => {
                        if(completed) {
                            dispatch(undoTodo(index, points))
                        } else {
                            dispatch(completeTodo(index, points))
                        }
                    }}>{ completed ? 'Done!' : 'Complete' }
                </button>
                <div className='vertical'></div>
                <button
                    className='delete-button btn-medium'
                    onClick={(e) => {
                        dispatch(deleteTodo(index))
                    }}>Delete</button>
            </div>
        </div>
    )
}

export default ShowTodo