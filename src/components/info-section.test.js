import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />);
  });

  it('should validate rendering of section content', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper.name()).toEqual('section');
  });
});