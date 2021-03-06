import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  });

  it('should contain all nested components', () => {
    const wrapper = shallow(<GuessSection />);
    expect(wrapper.name()).toEqual('section');
    expect(wrapper.contains('<Feedback />'));
    expect(wrapper.contains('<GuessForm />'));
  });
});