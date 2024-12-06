import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/authActions';

class App extends React.Component {
  handleLogin = (email, password) => {
    const { login } = this.props; // Access login from props
    login(email, password); // Call the action creator
  };

  render() {
    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <div>
        <h1>Welcome to the Dashboard</h1>
        {isLoggedIn ? (
          <p>You are logged in</p>
        ) : (
          <button onClick={() => this.handleLogin('user@example.com', 'password')}>
            Log In
          </button>
        )}
        {displayDrawer && <p>Notification Drawer is visible</p>}
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

// Map state to props
const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

// Map dispatch to props
const mapDispatchToProps = {
  login: loginRequest, // Connect loginRequest to the login prop
};

// Connect component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
