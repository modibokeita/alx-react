// task_3/dashboard/src/BodySection/BodySection.test.js
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders correctly with an h2 and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check for one h2 element with the correct text
    const h2 = wrapper.find('h2');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toBe('test title');

    // Check for one p element with the correct text
    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(p.text()).toBe('test children node');
  });
});
