import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should fire the onClick callbacks', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onRestartGame={callback} onGenerateAuralUpdate={callback}/>);
    wrapper.find('.new').simulate('click');
    wrapper.find('.visuallyhidden').simulate('click');
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('Should validate rendered content', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.name()).toEqual('nav');
  });
});
