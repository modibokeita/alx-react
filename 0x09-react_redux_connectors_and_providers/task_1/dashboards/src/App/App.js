import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// App Component
const App = ({ isLoggedIn, displayDrawer }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
      {displayDrawer && <div className="notification-drawer">Notifications</div>}
    </div>
  );
};

// Updated mapStateToProps function
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'), // Maps Redux state to props
    displayDrawer: state.get('isNotificationDrawerVisible'), // Maps Redux state to props
  };
};

// Define PropTypes
App.propTypes = {
  isLoggedIn: PropTypes.bool, // Indicates if the user is logged in
  displayDrawer: PropTypes.bool, // Indicates if the notification drawer should be displayed
};

// Define DefaultProps
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

// Connect mapStateToProps to the App component
export default connect(mapStateToProps)(App);
