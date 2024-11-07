// src/Notifications/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import {Notifications} from './Notifications';
import NotificationItem from './NotificationItem';
describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the first NotificationItem with the correct html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('type')).toBe('default');
    expect(firstItem.prop('value')).toBe('New course available');
  });
});


