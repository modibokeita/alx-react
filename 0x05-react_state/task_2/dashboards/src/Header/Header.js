import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../logo-holberton.jpg';
import { AppContext } from '../App/AppContext'; // Import the AppContext

class Header extends Component {
  static contextType = AppContext; // Use ContextType API to inherit context

  render() {
    const { user, logOut } = this.context; // Access user and logOut from context

    return (
      <div className={css(styles.header)}>
        <img src={logo} alt="holberton logo" className={css(styles.logo)} />
        <h1 className={css(styles.title)}>School dashboard</h1>

        {/* Conditionally render the welcome section when the user is logged in */}
        {user.isLoggedIn && (
          <section id="logoutSection" className={css(styles.logoutSection)}>
            <span>Welcome {user.email}</span>
            <button
              className={css(styles.logoutButton)}
              onClick={logOut}>
              logout
            </button>
          </section>
        )}
      </div>
    );
  }
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
  logoutSection: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    textAlign: 'center',
  },
  logoutButton: {
    padding: '5px 10px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
});

export default Header;
