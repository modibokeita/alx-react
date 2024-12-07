// src/selectors/courseSelector.test.js
import { fromJS, Map } from 'immutable';
import { getCoursesList } from './courseSelector';

describe('getCoursesList selector', () => {
  it('should return a List of course entities from the state', () => {
    // Sample state for testing
    const state = fromJS({
      courses: {
        course1: { id: 'course1', title: 'Course 1' },
        course2: { id: 'course2', title: 'Course 2' },
        course3: { id: 'course3', title: 'Course 3' },
      },
    });

    // Expected result: an Immutable List of courses
    const expectedResult = fromJS([
      { id: 'course1', title: 'Course 1' },
      { id: 'course2', title: 'Course 2' },
      { id: 'course3', title: 'Course 3' },
    ]);

    expect(getCoursesList(state)).toEqual(expectedResult);
  });
});
