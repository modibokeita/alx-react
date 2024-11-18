import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should mark notification as read and update state', () => {
    // Create a shallow render of the App component
    const wrapper = shallow(<App />);

    // Set the initial state with mock notifications
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'Course deadline approaching' },
      { id: 3, type: 'default', value: 'Your account was updated' },
    ];

    // Set the state of the component manually
    wrapper.setState({ listNotifications: initialNotifications });

    // Call the markNotificationAsRead function with a notification id
    const instance = wrapper.instance();
    instance.markNotificationAsRead(2);

    // Get the updated state after calling markNotificationAsRead
    const updatedNotifications = wrapper.state('listNotifications');

    // Verify that the notification with id 2 was removed
    expect(updatedNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'default', value: 'Your account was updated' },
    ]);
  });
});
