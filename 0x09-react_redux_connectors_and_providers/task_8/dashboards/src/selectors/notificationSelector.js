// src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

// Selector to get the notifications from the state
const getNotifications = (state) => state.notifications;

// Selector to get the current filter from the state
const getNotificationFilter = (state) => state.filter;

// Memoized selector for getting unread notifications based on the filter
export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getNotificationFilter],
  (notifications, filter) => {
    // Filter all unread notifications
    const unreadNotifications = notifications.filter((notification) => !notification.isRead);

    // Return based on filter type
    if (filter === 'urgent') {
      return unreadNotifications.filter((notification) => notification.type === 'urgent');
    }

    // If filter is set to default or any other value, return all unread notifications
    return unreadNotifications;
  }
);

// Remove getUnreadNotifications if it exists (deprecated selector)
