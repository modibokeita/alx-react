// task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders a BodySection component with the correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check that it renders a BodySection component
    const bodySection = wrapper.find(BodySection);
    expect(bodySection).toHaveLength(1);

    // Check that the title and children props are passed correctly
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.contains(<p>test children node</p>)).toBe(true);
  });
});
