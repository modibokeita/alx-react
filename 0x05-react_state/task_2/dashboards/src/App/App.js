import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import AppContext from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);

    // Local state
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: this.logOut,
    };

    this.logIn = this.logIn.bind(this);
  }

  // logIn function
  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  // logOut function
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  render() {
    const { user, logOut } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <>
          <Notifications />
          <div className={css(styles.app)}>
            <Header />
            <div className={css(styles.body)}>
              {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
            </div>
            <Footer className={css(styles.footer)} />
          </div>
        </>
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
