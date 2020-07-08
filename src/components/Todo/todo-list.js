import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleTodo from './single-todo';

class TodoList extends Component {
    getList () {
        console.log(this.props.todos)
        return this.props.todos.map((todo, index) => {
            return (
                <ul>
                    <li>
                        <SingleTodo 
                            key={index} 
                            index={index} 
                            title={todo.title}
                            completed={todo.completed}
                        />
                    </li>
                </ul>
            )
        })
    }

    render() {
        return (
            <div>
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