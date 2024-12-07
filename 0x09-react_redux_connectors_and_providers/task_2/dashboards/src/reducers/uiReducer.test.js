import { Map } from 'immutable';
import uiReducer from '../reducers/uiReducer';
import { LOGIN, LOGOUT } from '../actions/actionTypes';

describe('uiReducer', () => {
  it('should handle LOGIN action', () => {
    const initialState = Map({ user: null });
    const action = {
      type: LOGIN,
      user: { name: 'John Doe', email: 'john@example.com' },
    };
    const newState = uiReducer(initialState, action);
    expect(newState.get('user')).toEqual({ name: 'John Doe', email: 'john@example.com' });
  });

  it('should handle LOGOUT action', () => {
    const initialState = Map({ user: { name: 'John Doe', email: 'john@example.com' } });
    const action = { type: LOGOUT };
    const newState = uiReducer(initialState, action);
    expect(newState.get('user')).toBeNull();
  });
});
