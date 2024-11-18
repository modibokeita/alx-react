import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends React.Component {
  // Implement shouldComponentUpdate to optimize performance
  shouldComponentUpdate(nextProps) {
    // Only re-render if the length of the listNotifications has increased
    return (
      nextProps.listNotifications &&
      nextProps.listNotifications.length > (this.props.listNotifications?.length || 0)
    );
  }

  render() {
    const {
      listNotifications = [],
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <>
        {/* Notification drawer toggle */}
        <div
          className="menuItem"
          onClick={handleDisplayDrawer}
          role="button"
          tabIndex={0}
          onKeyPress={handleDisplayDrawer}
        >
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              &times;
            </button>
            <h1>Your Notifications</h1>
            <ul>
              {listNotifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

// Define propTypes for Notifications
Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(PropTypes.string),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

// Define defaultProps for Notifications
Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
