// src/actions/courseActionCreators.js

import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creator for selecting a course
 * @param {number} index - The index of the course to select
 * @returns {object} - Action with type SELECT_COURSE and index
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

/**
 * Action creator for unselecting a course
 * @param {number} index - The index of the course to unselect
 * @returns {object} - Action with type UNSELECT_COURSE and index
 */
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});
