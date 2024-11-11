// src/Notifications/NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct HTML when given type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toBe('test');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('renders the correct HTML when given html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(html);
  });
});
