import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('should render span', () => {
    let guessCount = 2
    const wrapper = shallow(<Feedback guessCount={guessCount} />);
    expect(wrapper.hasClass('visuallyhidden'));
  });

  it('should render h2', () => {
    let guessCount = 2
    const wrapper = shallow(<Feedback guessCount={guessCount}/>);
    expect(wrapper.name()).toEqual('h2');
  })


});