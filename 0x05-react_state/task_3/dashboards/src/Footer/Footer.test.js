import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext'; // Import the AppContext

describe('Footer Component', () => {
  // Mock context value for logged-out user
  const mockLoggedOutContext = {
    user: {
      isLoggedIn: false,
    },
  };

  // Mock context value for logged-in user
  const mockLoggedInContext = {
    user: {
      isLoggedIn: true,
      email: 'user@example.com',
    },
  };

  it('renders without crashing', () => {
    shallow(
      <AppContext.Provider value={mockLoggedOutContext}>
        <Footer />
      </AppContext.Provider>
    );
  });

  it('does not show the "Contact us" link when the user is logged out', () => {
    const wrapper = shallow(
      <AppContext.Provider value={mockLoggedOutContext}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a[href="/contact-us"]').length).toBe(0); // Link should not be rendered
  });

  it('shows the "Contact us" link when the user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={mockLoggedInContext}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a[href="/contact-us"]').length).toBe(1); // Link should be rendered
  });
});
