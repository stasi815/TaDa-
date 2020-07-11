import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
// import AddPoints from '../point-selector'
import './add-todo.css'

function AddTodo(props) {
    const [ title, setTitle ] = useState('Todo')
    const [ score, setScore ] = useState(0)

    return (
        <div className='add-todo'>
            <h3 className='directive'>
                Add Your Task: 
            </h3>
            <div className='input'>
                <input
                    type='text'
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    value={ title }
                />
                <div className="select-div">
                    <select value={ score } onChange={(e) => {
                            setScore(e.target.value)
                        }}>
                        <option value="0">Select points:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <button className='button save' onClick={(e) => {
                        let pts = parseInt(score)
                        props.addTodo(title, pts)
                    }}>Save</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = () => {
    return {
        addTodo
    }
}

export default connect(null, mapDispatchToProps())(AddTodo)

