import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import Todo from './Todo/add-todo'
import TodoList from './Todo/todo-list'
import PointTotal from './Todo/point-total'
import './App.css';

const TODO_STATE = 'TODO_STATE'

// Load State
export const loadState = () => {
  try{
    const serializedState = localStorage.getItem(TODO_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(TODO_STATE, serializedState)
  } catch (err) {
    console.log("Error saving data: " + err)
  }
}

const persistedState = loadState()
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState())
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList />
          <Todo />
          <PointTotal />
        </div>
      </Provider>
    );
  }
}

export default App;
