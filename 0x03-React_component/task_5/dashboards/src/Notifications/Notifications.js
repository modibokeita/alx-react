import React from 'react';
import './Notifications.css';

class Notifications extends React.Component {
  // Implement shouldComponentUpdate to optimize performance
  shouldComponentUpdate(nextProps) {
    // Only re-render if the length of the listNotifications has increased
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true; // Allow re-render
    }
    return false; // Prevent re-render
  }

  render() {
    return (
      <div className="Notifications">
        <h1>Note</h1>
        {/* You can map over the notifications here */}
        <ul>
          {this.props.listNotifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Notifications;
