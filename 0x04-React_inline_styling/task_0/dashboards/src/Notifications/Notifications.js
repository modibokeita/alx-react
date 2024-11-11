import React from 'react';
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
    const { listNotifications = [] } = this.props; // Default to empty array if undefined

    return (
      <div className="Notifications">
        <h1>Note</h1>
        <ul>
          {listNotifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Notifications;
