import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowTodo from './show-todo';
import './todo-list.css'

class TodoList extends Component {
    getList() {
        console.log(this.props.todos)
        return this.props.todos.map((todo, index) => {
            return (
                    <ShowTodo
                        key={index}
                        index={index}
                        title={todo.title}
                        completed={todo.completed}
                        points={todo.points}
                    />
            )
        })
    }

    render() {
        return (
            <div className="list-table">
                <div className='table-heading'>
                    <h2>Tasks</h2>
                    <h2>Points</h2>
                    <h2>Status</h2>
                </div>
                {this.getList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)