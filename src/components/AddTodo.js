import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <form style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Add New Todo ..."
          style={inpStt}
        />
        <input
          type="submit"
          name="Submit"
          className="btn"
          style={btnStt}
        />

      </form>
    )
  }
}

// styles 
const formStyle = {
  display: 'flex',
  padding: '10px 0'
}
const btnStt = {
  flex: '1'
}
const inpStt = {

  border: '1px solid #c7c3c3',
  flex: '10',
  padding: '6px'

}
export default AddTodo;