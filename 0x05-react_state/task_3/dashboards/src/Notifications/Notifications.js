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
    const { listNotifications = [], isOpen = false } = this.props; // Default to empty array if undefined

    return (
      <div className={css(isOpen ? styles.notificationsOpen : styles.notifications)}>
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
    fontSize: '16px', // Default font size for smaller screens
  },
  notificationsOpen: {
    padding: '0', // No padding when open
    backgroundColor: '#f4f4f4',
    width: '100%', // Full width for open state
    height: '100%', // Full height for open state
    position: 'fixed', // Fixed positioning to take over screen
    top: 0,
    left: 0,
    zIndex: 9999, // Ensure it sits on top of other elements
    overflowY: 'auto', // Allow scrolling if content overflows
    fontSize: '20px', // Larger font size when panel is open
  },
  title: {
    fontSize: '20px', // Ensure title has 20px font size
    color: '#333',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    margin: 0, // Ensure no margin to the list
  },
  listItem: {
    padding: '10px',
    backgroundColor: '#ffffff',
    marginBottom: '8px',
    borderRadius: '3px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
});

export default Notifications;
