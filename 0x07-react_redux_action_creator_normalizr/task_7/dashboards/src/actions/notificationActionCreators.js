import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creator for marking a notification as read.
 * @param {number} index - The index of the notification.
 * @returns {object} - The action object.
 */
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

/**
 * Action creator for setting a notification filter.
 * @param {string} filter - The filter to apply.
 * @returns {object} - The action object.
 */
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

/**
 * Bound notification action creators.
 * @param {function} dispatch - Redux dispatch function.
 * @returns {object} - Object containing bound notification action creators.
 */
export const boundNotificationActionCreators = (dispatch) =>
  bindActionCreators({ markAsRead, setNotificationFilter }, dispatch);
