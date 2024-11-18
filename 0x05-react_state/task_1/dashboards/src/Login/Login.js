import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState(
      { email },
      this.toggleSubmitButton // Callback to check if submit should be enabled
    );
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState(
      { password },
      this.toggleSubmitButton // Callback to check if submit should be enabled
    );
  }

  toggleSubmitButton() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { email, password, enableSubmit, isLoggedIn } = this.state;

    return (
      <div className={css(styles.body)}>
        <h1 className={css(styles.title)}>Log in to continue</h1>
        <p className={css(styles.subtitle)}>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email" className={css(styles.label)}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChangeEmail}
            className={css(styles.input)}
            required
          />
          <label htmlFor="password" className={css(styles.label)}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChangePassword}
            className={css(styles.input)}
            required
          />
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!enableSubmit}
          />
        </form>
        {isLoggedIn && (
          <p className={css(styles.successMessage)}>You are logged in!</p>
        )}
      </div>
    );
  }
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
    width: '30%',
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
  successMessage: {
    marginTop: '20px',
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Login;
