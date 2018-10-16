import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from '../guess-list'

it('Renders without crashing', () => {
  shallow(<GuessList guesses={[]} />);
});

it('Should render guesses', () => {
  const guesses = [1, 2, 3, 4];
  const wrapper = shallow(<GuessList guesses={guesses} />);
  const list = wrapper.find('li');
  guesses.forEach((guess, index) => {
    expect(list.at(index).text()).toEqual(guess.toString());
  });
});