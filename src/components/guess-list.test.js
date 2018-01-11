import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  let guesses = [1,2,3];

  it('Renders without crashing', () => {
    shallow(<GuessList guesses={guesses}/>);
  });

  it('Should render ul', () => {
    const wrapper = shallow(<GuessList guesses={guesses} />);
    expect(wrapper.hasClass('guessBox clearfix'));
  });

  it('Should render each list item', () => {
    let allGuesses = [1,2,3];
    const wrapper = shallow(<GuessList guesses={allGuesses} />);
    expect(wrapper.contains(<li key='0'>{allGuesses[0]}</li>)).toEqual(true);
  });
});