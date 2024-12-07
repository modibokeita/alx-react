import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions'; // Import the logout action creator

class Header extends React.Component {
  handleLogout = () => {
    const { logout } = this.props;
    logout(); // Dispatch the logout action
  };

  render() {
    const { user } = this.props; // Destructure user from props

    return (
      <div className="header">
        <h1>Welcome to the Dashboard</h1>
        {user ? (
          <div>
            <p>Hello, {user.name}!</p>
            <button onClick={this.handleLogout}>Logout</button> {/* Trigger logout on click */}
          </div>
        ) : (
          <p>Please log in</p>
        )}
      </div>
    );
  }
}

// Prop validation
Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired, // Validate that logout is a function
};

// Map state to props
const mapStateToProps = (state) => ({
  user: state.get('user'), // Assuming 'user' is stored in the Redux state
});

// Connect the component to Redux and pass the logout action creator as a prop
export default connect(mapStateToProps, { logout })(Header);
