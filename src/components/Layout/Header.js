import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={ headerStyle }>
      <h1>
        TodoList
      </h1>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        |
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </div>
    </header>
  )
}
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '6px'
}
const linkStyle = {
  color: '#fff',
  padding: '4px 8px'
}
