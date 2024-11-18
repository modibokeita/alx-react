import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { AppContext } from '../App/AppContext'; // Import the context
import { logOut } from '../App/App'; // Assuming logOut is exported from App.js (adjust as needed)

describe('Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders an img and h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('does not display the logoutSection if user is not logged in', () => {
    // Default context value (user is not logged in)
    const defaultContextValue = {
      user: { isLoggedIn: false, email: '', password: '' },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={defaultContextValue}>
        <Header />
      </AppContext.Provider>
    );

    // Verify the logout section is not rendered
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('displays the logoutSection if user is logged in', () => {
    // Context value with logged-in user
    const loggedInContextValue = {
      user: { isLoggedIn: true, email: 'test@example.com', password: 'password' },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={loggedInContextValue}>
        <Header />
      </AppContext.Provider>
    );

    // Verify the logout section is rendered
    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });

  it('calls logOut when the logout button is clicked', () => {
    // Context value with logged-in user and spy for logOut function
    const logOutSpy = jest.fn();
    const loggedInContextValue = {
      user: { isLoggedIn: true, email: 'test@example.com', password: 'password' },
      logOut: logOutSpy,
    };

    const wrapper = mount(
      <AppContext.Provider value={loggedInContextValue}>
        <Header />
      </AppContext.Provider>
    );

    // Simulate clicking the logout button
    wrapper.find('button').simulate('click');

    // Verify the logOut function was called
    expect(logOutSpy).toHaveBeenCalled();
  });
});
