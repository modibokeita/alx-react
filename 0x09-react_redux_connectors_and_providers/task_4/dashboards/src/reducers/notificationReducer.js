import { fromJS, Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge({
        notifications: fromJS(normalizedData.entities.notifications),
      });

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case MARK_AS_READ:
      return state.setIn(
        ['notifications', action.index.toString(), 'isRead'],
        true
      );

    default:
      return state;
  }
};

export default notificationReducer;
