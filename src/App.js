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
      }
    ]
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todo todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
