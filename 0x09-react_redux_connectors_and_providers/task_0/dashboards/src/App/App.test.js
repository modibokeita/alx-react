import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the correct object from the state', () => {
    // Create a mock state using Immutable.js
    const state = fromJS({
      isUserLoggedIn: true,
    });

    // Call mapStateToProps with the mock state
    const result = mapStateToProps(state);

    // Assert the result
    expect(result).toEqual({ isLoggedIn: true });
  });
});
