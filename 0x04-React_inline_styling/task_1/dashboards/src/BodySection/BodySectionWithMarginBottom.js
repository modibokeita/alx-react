// src/BodySection/BodySectionWithMarginBottom.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className={css(styles.marginBottom)}>
      <BodySection title={title}>
        {children}
      </BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

// Define styles for margin within the file
const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '20px', // Set the desired margin bottom
  },
});

export default BodySectionWithMarginBottom;
