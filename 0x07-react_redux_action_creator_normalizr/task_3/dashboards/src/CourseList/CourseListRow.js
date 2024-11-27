// src/CourseList/CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
    // Define styles for header and regular rows
    const headerRowStyle = { backgroundColor: '#deb5b545' };
    const regularRowStyle = { backgroundColor: '#f5f5f5ab' };

    return (
        <tr style={isHeader ? headerRowStyle : regularRowStyle}>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th className={css(styles.red)}>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <th colSpan={2}>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td className={css(styles.header)}>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
    isHeader: false,
};

const styles = StyleSheet.create({
    red: {
        backgroundColor: '#f5f5f5ab',
    },
    header:{
        backgroundColor: '#deb5b545',
    }
});

export default CourseListRow;
