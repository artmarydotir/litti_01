import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Layout/Header';
import About from './components/pages/About';
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
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addNewTodo} />
                <Todo
                  todos={ this.state.todos }
                  markAsComplete={this.topLevelComplete}
                  deltTask={this.deltTask}
                />
              </React.Fragment>
            )}>
            </Route>
            <Route path="/about" component={ About }/>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
