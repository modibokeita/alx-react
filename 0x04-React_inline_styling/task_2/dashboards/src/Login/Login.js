// src/Login/Login.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.body)}>
      <h1 className={css(styles.title)}>Log in to continue</h1>
      <p className={css(styles.subtitle)}>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.label)}>Email</label>
      <input type="email" name="email" id="email" className={css(styles.input)} />
      <label htmlFor="password" className={css(styles.label)}>Password</label>
      <input type="password" name="password" id="password" className={css(styles.input)} />
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: '20px',
    textAlign: 'left',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginTop: '10px',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    display: 'block',
    width: '10%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
});

export default Login;
