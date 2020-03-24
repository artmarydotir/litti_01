import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = ()=> {
    // if(this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: '10px',
      backgroundColor: '#eee',
      margin: '8px 0',
      borderBottom: '1px solid #ccc'
    }
  }

  render() {
    const {id, title } = this.props.todo;
    return (
      <div style={this.getStyle()} >
        <p>
          <input type="checkbox"
            onChange={this.props.checkComplete.bind(this, id)}
          />
          { title }
        </p>
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
