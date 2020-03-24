import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  // markAsComplete = (e)=> {
  //   console.log(e)
  // }
  render() {
    // console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem
        key={ todo.id }
        todo={ todo }
        checkComplete={this.props.markAsComplete}
      />
    ));
  }
}

// Define required prop types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;