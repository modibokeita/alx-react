// src/CourseList/CourseList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CourseList from './CourseList';
import * as courseActionCreators from '../actions/courseActionCreators';

jest.mock('../actions/courseActionCreators');

const mockStore = configureStore([thunk]);

describe('CourseList Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      courses: [
        { id: '1', title: 'Course 1', isSelected: false },
        { id: '2', title: 'Course 2', isSelected: false },
      ],
    });
    store.dispatch = jest.fn();
  });

  it('should dispatch fetchCourses when the component mounts', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    expect(courseActionCreators.fetchCourses).toHaveBeenCalled();
  });

  it('should dispatch selectCourse when the onChangeRow function is called with checked true', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkbox = screen.getByLabelText('Course 1');
    fireEvent.click(checkbox);

    expect(courseActionCreators.selectCourse).toHaveBeenCalledWith('1');
  });

  it('should dispatch unSelectCourse when the onChangeRow function is called with checked false', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkbox = screen.getByLabelText('Course 1');
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(courseActionCreators.unSelectCourse).toHaveBeenCalledWith('1');
  });
});
