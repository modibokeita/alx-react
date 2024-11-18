import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
    // State to track if the checkbox is checked
    const [isChecked, setIsChecked] = useState(false);

    // Handle checkbox toggle
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Render the row with Aphrodite styles
    return (
        <tr
            className={isHeader ? css(styles.headerRow) : isChecked ? css(styles.regularRow, styles.rowChecked) : css(styles.regularRow)}
        >
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
                    <td className={css(styles.regularCell)}>
                        {/* Add a checkbox in the first cell for regular rows */}
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </td>
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
    rowChecked: {
        backgroundColor: '#e6e4e4', // Style for checked row
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
