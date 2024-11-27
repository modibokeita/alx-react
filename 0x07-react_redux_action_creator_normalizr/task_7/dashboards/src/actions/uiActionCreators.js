import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

/**
 * Action creator for login success.
 * @param {object} user - The user object.
 * @returns {object} - The action object.
 */
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

/**
 * Action creator for login failure.
 * @returns {object} - The action object.
 */
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

/**
 * Async action creator for login request.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {function} - A thunk function.
 */
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN, user: { email, password } });

    try {
      const response = await fetch('/dist/login-success.json');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      dispatch(loginSuccess(data.user));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};
