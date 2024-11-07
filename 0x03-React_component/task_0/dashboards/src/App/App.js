// src/App/App.js
import React, { Component } from 'react';
import './App.css';
import { Notifications } from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

class App extends Component {
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
