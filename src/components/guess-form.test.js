import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onAdd callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
    wrapper.simulate('submit', { preventDefault() {} });
    expect(callback).toHaveBeenCalledTimes(1)
  });
});