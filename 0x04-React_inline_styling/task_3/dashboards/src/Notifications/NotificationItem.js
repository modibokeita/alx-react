// task_2/dashboard/src/Notifications/NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    // Determine the correct style based on the type of the notification
    const notificationStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        data-notification-type={type}
        className={css(notificationStyle)} // Apply the dynamic style
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      >
        {html ? null : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

const styles = StyleSheet.create({
  default: {
    padding: '10px',
    backgroundColor: '#f4f4f4',
    color: '#000',
    marginBottom: '8px',
    borderRadius: '3px',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  urgent: {
    padding: '10px',
    backgroundColor: '#ff4d4d',  // Red background for urgent
    color: '#fff',                // White text for contrast
    marginBottom: '8px',
    borderRadius: '3px',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
});

export default NotificationItem;
