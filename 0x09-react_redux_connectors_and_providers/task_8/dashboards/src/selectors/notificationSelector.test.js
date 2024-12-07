import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('Notification Selectors', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: {
      '1': { id: 1, type: 'default', value: 'Notification 1', isRead: true },
      '2': { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      '3': { id: 3, type: 'default', value: 'Notification 3', isRead: false },
    },
  });

  it('filterTypeSelected should return the correct filter type', () => {
    expect(filterTypeSelected(state)).toBe('DEFAULT');
  });

  it('getNotifications should return the notifications Map', () => {
    const expectedNotifications = fromJS({
      '1': { id: 1, type: 'default', value: 'Notification 1', isRead: true },
      '2': { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      '3': { id: 3, type: 'default', value: 'Notification 3', isRead: false },
    });
    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  it('getUnreadNotifications should return only unread notifications', () => {
    const expectedUnreadNotifications = fromJS({
      '2': { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      '3': { id: 3, type: 'default', value: 'Notification 3', isRead: false },
    });
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
