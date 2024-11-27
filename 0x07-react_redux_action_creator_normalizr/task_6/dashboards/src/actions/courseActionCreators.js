import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creator for selecting a course.
 * @param {number} index - The index of the course to select.
 * @returns {object} - The action object.
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

/**
 * Action creator for unselecting a course.
 * @param {number} index - The index of the course to unselect.
 * @returns {object} - The action object.
 */
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

/**
 * Bound course action creators.
 * @param {function} dispatch - Redux dispatch function.
 * @returns {object} - Object containing bound course action creators.
 */
export const boundCourseActionCreators = (dispatch) =>
  bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
