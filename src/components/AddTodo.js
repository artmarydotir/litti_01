import React, { Component } from 'react';

class AddTodo extends Component {
  // local-component state 
  state = {
    title: ''
  }
  onChangeTitle = (e) => {
    this.setState(
      {title : e.target.value}
      // or { [e.target.name]: e.target.value }
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    // !! we ned props cuz we want add sth to parent state
    if(this.state.title !== '') {
      this.props.addTodo(this.state.title);
    } else {
      alert("Shame on you, Empty task? Raally?")
    }
    this.setState({
      title: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Add New Todo ..."
          style={inpStt}
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <input
          type="submit"
          name="Submit"
          value="Add"
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