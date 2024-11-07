// src/Notifications/Notifications.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Notifications.css";
import "./NotificationItem";
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div className="Notifications">
        <h1>Note</h1>
        {/* Assuming NotificationItem is a component that takes id and markAsRead as props */}
        {this.props.notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            text={notification.text}
            markAsRead={this.markAsRead}
          />
        ))}
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;
