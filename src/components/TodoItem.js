import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = ()=> {
    if(this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    }
  }

  render() {
    return (
      <div style={this.getStyle()} >
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

// Prop types

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// inline style
// const itemStyle = {
//   backgroundColor : '#eee'
// }
export default TodoItem;
