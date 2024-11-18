import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { AppContext } from '../App/AppContext'; // Import the context

describe('App Component', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('renders the Login component when user is not logged in', () => {
    // Default state: user is not logged in
    const wrapper = mount(<App />);
    expect(wrapper.find('Login').length).toBe(1);
    expect(wrapper.find('CourseList').length).toBe(0);
  });

  it('renders the CourseList component when user is logged in', () => {
    // Simulate the state when the user is logged in
    const wrapper = mount(<App />);
    wrapper.instance().logIn('test@example.com', 'password'); // Simulate logIn
    wrapper.update();

    expect(wrapper.find('Login').length).toBe(0);
    expect(wrapper.find('CourseList').length).toBe(1);
  });

  it('updates state correctly when logIn is called', () => {
    const wrapper = mount(<App />);

    // Simulate calling logIn
    wrapper.instance().logIn('test@example.com', 'password');
    wrapper.update();

    // Verify state updates correctly
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('test@example.com');
    expect(wrapper.state('user').password).toBe('password');
  });

  it('updates state correctly when logOut is called', () => {
    const wrapper = mount(<App />);

    // First log in
    wrapper.instance().logIn('test@example.com', 'password');
    wrapper.update();

    // Now log out
    wrapper.instance().logOut();
    wrapper.update();

    // Verify state updates correctly
    expect(wrapper.state('user').isLoggedIn).toBe(false);
    expect(wrapper.state('user').email).toBe('');
    expect(wrapper.state('user').password).toBe('');
  });

  it('calls logOut and updates state correctly when logout link is clicked', () => {
    const wrapper = mount(<App />);

    // First log in
    wrapper.instance().logIn('test@example.com', 'password');
    wrapper.update();

    // Simulate clicking the logout link
    wrapper.find('#logoutSection button').simulate('click');
    wrapper.update();

    // Verify that the state has been updated
    expect(wrapper.state('user').isLoggedIn).toBe(false);
    expect(wrapper.state('user').email).toBe('');
    expect(wrapper.state('user').password).toBe('');
  });
});
