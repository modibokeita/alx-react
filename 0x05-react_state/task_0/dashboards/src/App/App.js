// src/App/App.js
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      displayDrawer: false,
    };

    // Bind methods
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  // Method to show the drawer
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  // Method to hide the drawer
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer } = this.state;

    return (
      <>
        <Notifications
          displayDrawer={displayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.body)}>
            <Login />
          </div>
          <div className={css(styles.courseList)}>
            <CourseList />
          </div>
          <Footer className={css(styles.footer)} />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  body: {
    padding: '20px',
    minHeight: '60vh',
  },
  footer: {
    borderTop: '1px solid #ccc',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  courseList: {
    marginTop: '20px',
  },
});

export default App;
