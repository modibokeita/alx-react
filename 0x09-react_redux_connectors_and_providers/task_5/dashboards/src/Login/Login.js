// src/Login/Login.js
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="App-body">
        <h1>Log in To continue </h1>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>OK</button>
      </div>
  );
}

export default Login;
