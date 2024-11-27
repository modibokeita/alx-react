// src/actions/uiActionCreators.js

import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';

  /**
   * Action creator for login
   * @param {string} email - The user's email
   * @param {string} password - The user's password
   * @returns {object} - Action with type LOGIN and user object
   */
  export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password },
  });

  /**
   * Action creator for logout
   * @returns {object} - Action with type LOGOUT
   */
  export const logout = () => ({
    type: LOGOUT,
  });

  /**
   * Action creator to display the notification drawer
   * @returns {object} - Action with type DISPLAY_NOTIFICATION_DRAWER
   */
  export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
  });

  /**
   * Action creator to hide the notification drawer
   * @returns {object} - Action with type HIDE_NOTIFICATION_DRAWER
   */
  export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
  });
