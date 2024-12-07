// src/CourseList/CourseListRow.js
import React from 'react';

const CourseListRow = ({ course, isChecked, onChangeRow }) => {
  const handleChange = (e) => {
    onChangeRow(course.id, e.target.checked);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      {course.title}
    </li>
  );
};

export default CourseListRow;
