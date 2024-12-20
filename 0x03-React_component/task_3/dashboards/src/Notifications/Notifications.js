// src/Notifications/Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }} />
      </ul>
    </div>
  );
}

export default Notifications;

