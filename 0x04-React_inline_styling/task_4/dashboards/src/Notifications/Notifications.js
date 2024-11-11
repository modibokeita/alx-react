// src/Notifications/Notifications.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  // Implement shouldComponentUpdate to optimize performance
  shouldComponentUpdate(nextProps) {
    // Only re-render if the length of the listNotifications has increased
    return (
      nextProps.listNotifications &&
      nextProps.listNotifications.length > (this.props.listNotifications?.length || 0)
    );
  }

  render() {
    const { listNotifications = [] } = this.props;

    return (
      <div className={css(styles.notifications)}>
        <h1 className={css(styles.title)}>Your Notifications</h1>
        <ul className={css(styles.list)}>
          {listNotifications.map((notification, index) => (
            <li key={index} className={css(styles.listItem)}>
              {notification}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  notifications: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '20px auto',
    float: 'right',
    visibility: 'visible', // initially visible
    animationName: [styles.fadeIn, styles.bounce],
    animationDuration: '1s, 0.5s',
    animationIterationCount: 1, // Run animations only once
  },
  title: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    padding: '10px',
    backgroundColor: '#ffffff',
    marginBottom: '8px',
    borderRadius: '3px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    position: 'fixed',
    right: '10px',
    top: '20px',
    padding: '10px',
    backgroundColor: '#fff8f8',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    animationName: [styles.fadeIn, styles.bounce],
    animationDuration: '1s, 0.5s',
    animationIterationCount: 3, // Animation repeats 3 times
  },
  menuItemHidden: {
    visibility: 'hidden', // Hide the menu item when notifications list is visible
  },
  fadeIn: {
    '0%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },
  bounce: {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-5px)',
    },
    '100%': {
      transform: 'translateY(5px)',
    },
  },
});

export default Notifications;
