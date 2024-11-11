import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

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
});
