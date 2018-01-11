import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('should validate content and callbacks', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Header onGenerateAuralUpdate={callback} onRestartGame={callback}/>);
    expect(wrapper.name()).toEqual('header');
  })
  
});