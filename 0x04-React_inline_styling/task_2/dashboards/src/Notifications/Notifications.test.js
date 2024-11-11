// task_2/dashboard/src/Notifications/NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('should not re-render when updating with the same list', () => {
    // Initial list of notifications
    const listNotifications = ['Notification 1', 'Notification 2'];

    // Spy on the render method to track rerenders
    const spy = jest.spyOn(Notifications.prototype, 'render');

    // Shallow render the component
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

    // Set the same props again (same list)
    wrapper.setProps({ listNotifications });

    // Check that the render method has not been called again
    expect(spy).toHaveBeenCalledTimes(1);

    // Restore the spy
    spy.mockRestore();
  });

  it('should re-render when updating with a longer list', () => {
    // Initial list of notifications
    const listNotifications = ['Notification 1', 'Notification 2'];

    // Spy on the render method to track rerenders
    const spy = jest.spyOn(Notifications.prototype, 'render');

    // Shallow render the component
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

    // Set new props with a longer list
    const newListNotifications = ['Notification 1', 'Notification 2', 'Notification 3'];
    wrapper.setProps({ listNotifications: newListNotifications });

    // Check that the render method has been called again because the list is longer
    expect(spy).toHaveBeenCalledTimes(2);

    // Restore the spy
    spy.mockRestore();
  });

  it('should render NotificationItem with correct styles based on type', () => {
    const markAsRead = jest.fn();

    // Sample notification data for 'default' type
    const defaultNotification = {
      type: 'default',
      value: 'Notification 1',
      html: null,
      id: 1,
      markAsRead
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
      markAsRead
    };

    // Shallow render NotificationItem
    const wrapperUrgent = shallow(<NotificationItem {...urgentNotification} />);

    // Check if 'urgent' style is applied
    expect(wrapperUrgent.find('li').hasClass('urgent')).toBe(true);
  });
});
