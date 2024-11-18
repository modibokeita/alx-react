import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('should not re-render when updating with the same list', () => {
    // Initial list of notifications
    const listNotifications = [
      { id: 1, value: 'Notification 1', type: 'default' },
      { id: 2, value: 'Notification 2', type: 'urgent' },
    ];

    // Spy on the render method to track rerenders
    const spy = jest.spyOn(Notifications.prototype, 'render');

    // Shallow render the component
    const wrapper = shallow(<Notifications listNotifications={listNotifications} markNotificationAsRead={() => {}} />);

    // Set the same props again (same list)
    wrapper.setProps({ listNotifications });

    // Check that the render method has not been called again
    expect(spy).toHaveBeenCalledTimes(1);

    // Restore the spy
    spy.mockRestore();
  });

  it('should re-render when updating with a longer list', () => {
    // Initial list of notifications
    const listNotifications = [
      { id: 1, value: 'Notification 1', type: 'default' },
      { id: 2, value: 'Notification 2', type: 'urgent' },
    ];

    // Spy on the render method to track rerenders
    const spy = jest.spyOn(Notifications.prototype, 'render');

    // Shallow render the component
    const wrapper = shallow(<Notifications listNotifications={listNotifications} markNotificationAsRead={() => {}} />);

    // Set new props with a longer list
    const newListNotifications = [
      { id: 1, value: 'Notification 1', type: 'default' },
      { id: 2, value: 'Notification 2', type: 'urgent' },
      { id: 3, value: 'Notification 3', type: 'default' },
    ];
    wrapper.setProps({ listNotifications: newListNotifications });

    // Check that the render method has been called again because the list is longer
    expect(spy).toHaveBeenCalledTimes(2);

    // Restore the spy
    spy.mockRestore();
  });

  it('should call markNotificationAsRead when a notification is marked as read', () => {
    const markNotificationAsRead = jest.fn();

    // Sample notification list
    const listNotifications = [
      { id: 1, value: 'Notification 1', type: 'default' },
      { id: 2, value: 'Notification 2', type: 'urgent' },
    ];

    // Shallow render the Notifications component
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );

    // Find the "Mark as Read" button and simulate a click
    wrapper.find('button').at(0).simulate('click');

    // Ensure that markNotificationAsRead has been called with the correct id
    expect(markNotificationAsRead).toHaveBeenCalledWith(1); // id of the first notification
  });

  it('should render NotificationItem with correct styles based on type', () => {
    const markAsRead = jest.fn();

    // Sample notification data for 'default' type
    const defaultNotification = {
      type: 'default',
      value: 'Notification 1',
      html: null,
      id: 1,
      markAsRead,
    };

    // Shallow render NotificationItem
    const wrapperDefault = shallow(<NotificationItem {...defaultNotification} />);

    // Check if 'default' style is applied
    expect(wrapperDefault.find('li').hasClass('default')).toBe(true);

    // Sample notification data for 'urgent' type
    const urgentNotification = {
      type: 'urgent',
      value: 'Urgent Notification',
      html: null,
      id: 2,
      markAsRead,
    };

    // Shallow render NotificationItem
    const wrapperUrgent = shallow(<NotificationItem {...urgentNotification} />);

    // Check if 'urgent' style is applied
    expect(wrapperUrgent.find('li').hasClass('urgent')).toBe(true);
  });
});
