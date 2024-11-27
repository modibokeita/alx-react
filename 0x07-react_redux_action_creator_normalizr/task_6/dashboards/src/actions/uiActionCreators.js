import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/**
 * Action creator for login.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {object} - The action object.
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action creator for logout.
 * @returns {object} - The action object.
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action creator for displaying notification drawer.
 * @returns {object} - The action object.
 */
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

/**
 * Action creator for hiding notification drawer.
 * @returns {object} - The action object.
 */
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

/**
 * Bound UI action creators.
 * @param {function} dispatch - Redux dispatch function.
 * @returns {object} - Object containing bound UI action creators.
 */
export const boundUIActionCreators = (dispatch) =>
  bindActionCreators(
    { login, logout, displayNotificationDrawer, hideNotificationDrawer },
    dispatch
  );
