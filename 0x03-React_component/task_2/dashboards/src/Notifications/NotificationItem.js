// src/Notifications/NotificationItem.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render() {
    const { id, text, markAsRead } = this.props;
    return (
      <li onClick={() => markAsRead(id)}>
        {text}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  markAsRead: () => {},
};

export default NotificationItem;
