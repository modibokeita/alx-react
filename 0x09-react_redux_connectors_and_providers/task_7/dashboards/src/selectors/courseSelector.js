// src/selectors/courseSelector.js
import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Selector to get all course entities from the state
export const getCourses = (state) => state.courses;

// Selector to return courses as an Immutable List
export const getCoursesList = createSelector(
  [getCourses],
  (courses) => courses.valueSeq().toList()
);
