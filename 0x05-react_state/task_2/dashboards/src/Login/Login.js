import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { logIn } = this.props;

    // Call the logIn function from props
    logIn(email, password);
  }

  render() {
    const { email, password } = this.state;

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
            className={css(styles.input)}
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="password" className={css(styles.label)}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={css(styles.input)}
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit" className={css(styles.button)}>OK</button>
        </form>
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
