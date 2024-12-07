import { createSelector } from 'reselect';

// Selector for the filter
export const filterTypeSelected = (state) => state.get('filter');

// Selector for all notifications
export const getNotifications = (state) => state.get('notifications');

// Selector for unread notifications
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => !notification.get('isRead'))
);
