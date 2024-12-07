// src/actions/notificationActionCreators.js

import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creator for marking a notification as read
 * @param {number} index - Index of the notification to mark as read
 * @returns {object} - Action with type MARK_AS_READ and index
 */
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

/**
 * Action creator for setting the notification filter
 * @param {string} filter - The notification filter (DEFAULT or URGENT)
 * @returns {object} - Action with type SET_TYPE_FILTER and filter
 */
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});
