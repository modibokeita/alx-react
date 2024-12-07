import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = fromJS({ notifications: {}, filter: 'DEFAULT' });
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
      ],
    };
    const expectedState = fromJS({
      notifications: {
        '1': { id: 1, type: 'default', value: 'Notification 1' },
        '2': { id: 2, type: 'urgent', value: 'Notification 2' },
      },
      filter: 'DEFAULT',
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
