import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import { fromJS } from 'immutable';

// Mock state for testing
const state = fromJS({
  courses: {},
  notifications: {},
  ui: {
    user: null,
    isNotificationDrawerVisible: false,
  },
});

describe('App component', () => {
  it('should map state to props correctly', () => {
    const expectedProps = {
      isLoggedIn: false,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // Additional tests as needed
});
