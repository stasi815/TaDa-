import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../.././src/actions';
import './Todo/todo.css'

function AddPoints(props) {
    const [ points, setPoints ] = useState('Points')

    return (
        <div>
            <select>
                <option value="0">Select points:</option>
                <option value={ points } onChange={(e) => {
                    setPoints(e.target.value)
                }}>1</option>
                <option value={ points }  onChange={(e) => {
                    setPoints(e.target.value)
                }}>2</option>
                <option value={ points }  onChange={(e) => {
                    setPoints(e.target.value)
                }}>3</option>
                <option value={ points }  onChange={(e) => {
                    setPoints(e.target.value)
                }}>4</option>
                <option value={ points }  onChange={(e) => {
                    setPoints(e.target.value)
                }}>5</option>
            </select>
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

export default connect(mapStateToProps, mapDispatchToProps())(AddPoints)