// src/Header/Header.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../logo-holberton.jpg';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="holberton logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    fontSize: 'calc(10px + 2vmin)',
    borderBottom: '5px solid red',
    alignItems: 'center', // Aligns items vertically within the header
  },
  logo: {
    marginRight: '15px',
  },
  title: {
    padding: '100px',
    color: 'red',
    margin: 0,
  },
});

export default Header;
