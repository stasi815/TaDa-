import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './todo.css'

function AddTodo(props) {
    const [ title, setTitle ] = useState('Todo')
    const [ done, setDone ] = useState('Done')

    return (
        <div>
            <input
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                value={ title }
            />
            <div>
                <button className='button' onClick={(e) => {
                    props.addTodo(title)
                }}>Save</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {
        addTodo
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(AddTodo)