import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from '../guess-count'

it('Renders without crashing', () => {
  shallow(<GuessCount />);
});

it('Renders a guesscount', () => {
  let count = 4;
  const wrapper = shallow(<GuessCount guessCount={count} />);
  expect(wrapper.text()).toEqual(`You've made ${count} guesses!`)
});