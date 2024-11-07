// src/App/App.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Notifications } from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

class App extends Component {
  static propTypes = {
    logOut: PropTypes.func,
  };

  static defaultProps = {
    logOut: () => {},
  };

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            <Login />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
