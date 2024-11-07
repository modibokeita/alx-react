// task_4/dashboard/src/HOC/WithLogging.test.js
import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    // Mock console.log
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleSpy.mockRestore();
  });

  it('logs "Component Component is mounted" and "Component Component is going to unmount" for a pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />);

    // Check mount log
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    // Unmount the component and check unmount log
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs "Component Login is mounted" and "Component Login is going to unmount" for the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);

    // Check mount log
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    // Unmount the component and check unmount log
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
