import React from 'react';
import Todo from './components/Todos';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Love Coffee',
        completed: false
      },
      {
        id: 2,
        title: 'Hate Milk',
        completed: true
      },
      {
        id: 3,
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
     console.log(id)
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <Todo
          todos={ this.state.todos }
          markAsComplete={this.topLevelComplete}
          deltTask={this.deltTask}
          />
      </div>
    );
  }
}

export default App;
