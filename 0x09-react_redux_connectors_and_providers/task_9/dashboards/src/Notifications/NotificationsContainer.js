// src/Notifications/NotificationsContainer.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const NotificationsContainer = ({ notifications, fetchNotifications, setNotificationFilter }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      notifications={notifications}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter: (filter) => ({ type: 'SET_NOTIFICATION_FILTER', filter }),
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
