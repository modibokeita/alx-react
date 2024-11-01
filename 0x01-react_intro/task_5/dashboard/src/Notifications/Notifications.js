import React from 'react'
import "./Notifications.css"
import { getLatestNotification } from '../utils/utils';
import closeIcon from './close-icon.png';
export function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
      </button>

      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
