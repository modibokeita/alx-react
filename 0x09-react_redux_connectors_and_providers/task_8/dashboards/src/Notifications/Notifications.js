// src/Notifications/Notifications.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActionCreators';

class Notifications extends Component {
  render() {
    const { notifications, setNotificationFilter } = this.props;

    return (
      <div>
        <h2>Here is the list of notifications</h2>
        <div>
          <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
          <button onClick={() => setNotificationFilter('default')}>💠</button>
        </div>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Map state to props using the memoized selector
const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

// Map dispatch to props
const mapDispatchToProps = {
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
