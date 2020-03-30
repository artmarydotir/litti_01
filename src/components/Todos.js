import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  // markAsComplete = (e)=> {
  //   console.log(e)
  // }
  render() {
    // console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        checkComplete={this.props.markAsComplete}
        deltTask={this.props.deltTask}
      />
    ));
  }
}

// Define required prop types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markAsComplete: PropTypes.func.isRequired,
  deltTask: PropTypes.func.isRequired,
};
export default Todos;
