// src/CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders correctly when isHeader is true and textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" />);
        // Test for header row with a single header cell
        expect(wrapper.find('th').length).toBe(1);
        expect(wrapper.find('th').prop('colSpan')).toBe(2);
        expect(wrapper.find('th').text()).toBe("Test");
        // Test if the row has correct styles for header
        expect(wrapper.find('tr').hasClass('headerRow')).toBe(true);
    });

    it('renders correctly when isHeader is true and textSecondCell exists', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" textSecondCell="Value" />);
        // Test for header row with two header cells
        expect(wrapper.find('th').length).toBe(2);
        expect(wrapper.find('th').at(0).text()).toBe("Test");
        expect(wrapper.find('th').at(1).text()).toBe("Value");
        // Test if the row has correct styles for header
        expect(wrapper.find('tr').hasClass('headerRow')).toBe(true);
    });

    it('renders correctly when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Test" textSecondCell="Value" />);
        // Test for regular row with two data cells
        expect(wrapper.find('td').length).toBe(2);
        expect(wrapper.find('td').at(0).text()).toBe("Test");
        expect(wrapper.find('td').at(1).text()).toBe("Value");
        // Test if the row has correct styles for regular row
        expect(wrapper.find('tr').hasClass('regularRow')).toBe(true);
    });

    it('applies correct styling to header cells', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" textSecondCell="Value" />);
        // Ensure header cell styles are applied correctly
        expect(wrapper.find('th').at(0).hasClass('headerCell')).toBe(true);
        expect(wrapper.find('th').at(1).hasClass('headerCell')).toBe(true);
    });

    it('applies correct styling to regular cells', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Test" textSecondCell="Value" />);
        // Ensure regular cell styles are applied correctly
        expect(wrapper.find('td').at(0).hasClass('regularCell')).toBe(true);
        expect(wrapper.find('td').at(1).hasClass('regularCell')).toBe(true);
    });
});
