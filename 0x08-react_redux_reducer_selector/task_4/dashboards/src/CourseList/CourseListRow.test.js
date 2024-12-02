// src/CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders correctly when isHeader is true and textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" />);
        expect(wrapper.find('th').length).toBe(1);
        expect(wrapper.find('th').prop('colSpan')).toBe(2);
        expect(wrapper.find('th').text()).toBe("Test");
    });

    it('renders correctly when isHeader is true and textSecondCell exists', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" textSecondCell="Value" />);
        expect(wrapper.find('th').length).toBe(2);
        expect(wrapper.find('th').at(0).text()).toBe("Test");
        expect(wrapper.find('th').at(1).text()).toBe("Value");
    });

    it('renders correctly when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Test" textSecondCell="Value" />);
        expect(wrapper.find('td').length).toBe(2);
        expect(wrapper.find('td').at(0).text()).toBe("Test");
        expect(wrapper.find('td').at(1).text()).toBe("Value");
    });
});
