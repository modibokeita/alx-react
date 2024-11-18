import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext'; // Import the AppContext
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  render() {
    const { user } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Notifications />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.body)}>
            {!user.isLoggedIn ? <Login logIn={this.logIn} /> : <CourseList />}
          </div>
          <Footer className={css(styles.footer)} />
        </div>
      </AppContext.Provider>
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
