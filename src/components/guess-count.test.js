import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount  />);
  });

  it('should render correct count and noun', () => {
    let guessCount = 3;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual('You\'ve made3guesses!');
  });

  it('should render correct singular count and noun', () => {
    let guessCount = 1;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual('You\'ve made1guess!');
  });
});