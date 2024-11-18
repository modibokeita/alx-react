import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should not re-render when updating with the same list', () => {
    const listNotifications = ['Notification 1', 'Notification 2'];
    const spy = jest.spyOn(Notifications.prototype, 'render');
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications });
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it('should re-render when updating with a longer list', () => {
    const listNotifications = ['Notification 1', 'Notification 2'];
    const spy = jest.spyOn(Notifications.prototype, 'render');
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const newListNotifications = ['Notification 1', 'Notification 2', 'Notification 3'];
    wrapper.setProps({ listNotifications: newListNotifications });
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });

  it('should call handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawerMock} />
    );
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerMock} />
    );
    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
