import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  let guessCount = [1,2,3];
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={guessCount}/>);
  });

  it('Should validate section and nested components', () => {
    let guessCount = [1,2,3];
    const wrapper = shallow(<StatusSection guesses={guessCount} />);
    expect(wrapper.name()).toEqual('section');
    expect(wrapper.contains('GuessCount'));
    expect(wrapper.contains('GuessList'));
    expect(wrapper.contains('AuralStatus'));
  });
});