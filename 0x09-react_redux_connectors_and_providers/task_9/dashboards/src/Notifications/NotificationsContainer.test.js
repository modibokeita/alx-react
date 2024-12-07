// src/Notifications/NotificationsContainer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NotificationsContainer from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
}));

const mockStore = configureStore([]);

describe('NotificationsContainer', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      notifications: [],
      filter: 'default',
    });
    store.dispatch = jest.fn();
  });

  it('should fetch notifications on mount', () => {
    render(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );

    expect(fetchNotifications).toHaveBeenCalled();
  });
});
