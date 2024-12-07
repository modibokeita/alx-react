import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const initialState = fromJS({ courses: {} });
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'React', credit: 20 },
        { id: 2, name: 'Redux', credit: 10 },
      ],
    };
    const expectedState = fromJS({
      courses: {
        '1': { id: 1, name: 'React', credit: 20 },
        '2': { id: 2, name: 'Redux', credit: 10 },
      },
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
