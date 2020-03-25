import React from 'react';
import Todo from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Layout/Header';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Love Coffee',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Hate Milk',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Love coding',
        completed: true
      }
    ]
  }
  // toggle complete event
  topLevelComplete = (id) => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map((todoItrate) => {
        if(todoItrate.id === id) {
          todoItrate.completed = !todoItrate.completed;
        }
        return todoItrate;
      })
    });
  }
  // delete task event 
  deltTask = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }
  // add new todo
  addNewTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addNewTodo} />
          <Todo
            todos={ this.state.todos }
            markAsComplete={this.topLevelComplete}
            deltTask={this.deltTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
