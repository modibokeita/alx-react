// Action Types
export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

// Action Creator to set the loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

// Action Creator to set notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

// Thunk action creator to fetch notifications from the API
export const fetchNotifications = () => {
  return async (dispatch) => {
    // Set loading state to true before fetching
    dispatch(setLoadingState(true));

    try {
      const response = await fetch('/notifications.json');
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      const data = await response.json();

      // Dispatch the setNotifications action with the fetched data
      dispatch(setNotifications(data));
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      // Set loading state to false after the fetch completes
      dispatch(setLoadingState(false));
    }
  };
};
