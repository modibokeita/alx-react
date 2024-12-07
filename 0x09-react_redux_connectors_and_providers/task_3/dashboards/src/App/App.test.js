// src/App/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer sets displayDrawer to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer sets displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // First set it to true
    expect(wrapper.state('displayDrawer')).toBe(true); // Confirm it was set
    wrapper.instance().handleHideDrawer(); // Then set it to false
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});
