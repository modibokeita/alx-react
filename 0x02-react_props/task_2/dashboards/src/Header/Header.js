import logo from "../logo-holberton.jpg"
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="App-header">
    <img src={logo} alt="holberton logo" />
    <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
