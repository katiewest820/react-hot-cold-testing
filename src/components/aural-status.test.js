import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Should return p with class', () => {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.hasClass('visuallyhidden'));
  });

  it('should contain auralstatus prop', () => {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.name()).toEqual('p');
  });
  
});