import { Map } from 'immutable';
import { LOGIN, LOGOUT } from '../actions/actionTypes'; // Import action types

// Initial state
const initialState = Map({
  user: null, // Initial user state is null
  isNotificationDrawerVisible: false, // Assuming you have this property
});

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('user', action.user); // Set user from action payload

    case LOGOUT:
      return state.set('user', null); // Reset user to null on logout

    // Additional cases can be added as needed
    default:
      return state;
  }
};

export default uiReducer;
