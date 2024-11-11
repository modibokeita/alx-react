// src/CourseList/CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
    // Render the row with Aphrodite styles
    return (
        <tr className={isHeader ? css(styles.headerRow) : css(styles.regularRow)}>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th className={css(styles.headerCell, styles.red)}>{textFirstCell}</th>
                        <th className={css(styles.headerCell)}>{textSecondCell}</th>
                    </>
                ) : (
                    <th colSpan={2} className={css(styles.headerCell)}>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td className={css(styles.regularCell)}>{textFirstCell}</td>
                    <td className={css(styles.regularCell)}>{textSecondCell}</td>
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
    // Define styles for rows
    headerRow: {
        backgroundColor: '#deb5b545',
    },
    regularRow: {
        backgroundColor: '#f5f5f5ab',
    },
    // Define styles for header cells
    headerCell: {
        padding: '10px',
        fontWeight: 'bold',
    },
    red: {
        backgroundColor: '#f5f5f5ab',
    },
    // Define styles for regular cells
    regularCell: {
        padding: '10px',
    },
});

export default CourseListRow;
