// src/CourseList/CourseList.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const CourseList = () => {
    return (
        <table className={css(styles.courseList)}>
            <thead>
                <CourseListRow isHeader textFirstCell="Available courses" />
                <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6" textSecondCell="60" />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
                <CourseListRow textFirstCell="React" textSecondCell="40" />
            </tbody>
        </table>
    );
};

const styles = StyleSheet.create({
    courseList: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0',
    },
    th: {
        backgroundColor: '#deb5b545',
        padding: '10px',
        textAlign: 'left',
    },
    td: {
        padding: '10px',
        border: '1px solid #ddd',
    },
});

export default CourseList;
