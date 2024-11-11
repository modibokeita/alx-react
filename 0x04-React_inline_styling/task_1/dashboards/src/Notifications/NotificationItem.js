// task_5/dashboard/src/Notifications/NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      >
        {html ? null : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
