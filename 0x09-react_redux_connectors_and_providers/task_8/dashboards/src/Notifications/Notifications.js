import { Map } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionCreators';

const initialState = Map({
  notifications: Map(),
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.payload);

    case FETCH_NOTIFICATIONS_SUCCESS:
      // Merging new notifications with existing notifications using `mergeDeep`
      return state.set(
        'notifications',
        state.get('notifications').mergeDeep(Map(action.payload))
      );

    default:
      return state;
  }
};

export default notificationReducer;
