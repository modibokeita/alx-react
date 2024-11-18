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
    this.state = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Course deadline approaching' },
        { id: 3, type: 'default', value: 'Your account was updated' },
      ],
    };
  }

  // Function to mark a notification as read
  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id),
    }));
  }

  render() {
    const { listNotifications } = this.state;

    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
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
