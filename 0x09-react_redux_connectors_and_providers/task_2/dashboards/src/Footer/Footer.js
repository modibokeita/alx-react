import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    const { user } = this.props; // Destructure user from props

    return (
      <div className="footer">
        <p>Footer Content</p>
        {user && <p>Welcome, {user.name}!</p>} {/* Display user name if available */}
      </div>
    );
  }
}

// Prop validation
Footer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

// Map state to props
const mapStateToProps = (state) => ({
  user: state.get('user'), // Assuming 'user' is stored in the Redux state
});

// Connect the component to Redux store
export default connect(mapStateToProps)(Footer);
