import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './add-todo.css'

function AddTodo(props) {
    const [ title, setTitle ] = useState('Todo')
    const [ score, setScore ] = useState(0)
    const [ category, setCategory ] = useState('Category')

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
                    <select className='point-select' value={ score } onChange={(e) => {
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
                    <select className='cat-select'  value={ category } onChange={(e) => {
                            setCategory(e.target.value)
                        }}>
                        <option value="0">Select category:</option>
                        <option value="Health">Health</option>
                        <option value="School">School</option>
                        <option value="Work">Work</option>
                        <option value="Art">Art</option>
                        <option value="Spirituality">Spirituality</option>
                        <option value="Exercise">Exercise</option>
                        <option value="Errand">Errand</option>
                        <option value="Beauty">Beauty</option>
                        {/* <option value="9">9</option>
                        <option value="10">10</option> */}
                    </select>
                </div>
                <button className='button save' onClick={(e) => {
                        let pts = parseInt(score)
                        let cat = String(category)
                        props.addTodo(title, pts, cat)
                }}>Save</button>
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

