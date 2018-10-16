import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from '../game';

it('Renders without crashing', () => {
  shallow(<Game />);
});

it('Can restart a game', () => {
  const wrapper = shallow(<Game />);
  wrapper.setState({
    guesses: [25, 1],
    feedback: 'Different',
    auralStatus: 'Different',
    correctAnswer: 101
  });
  wrapper.instance().restartGame();
  expect(wrapper.state('guesses')).toEqual([]);
  expect(wrapper.state('feedback')).toEqual('Make your guess!');
  expect(wrapper.state('auralStatus')).toEqual('');
  expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
  expect(wrapper.state('correctAnswer')).toBeLessThan(101);
});

it('Can make guesses', () => {
  const wrapper = shallow(<Game />);
  wrapper.setState({correctAnswer: 60});

  wrapper.instance().makeGuess('Invalid');
  expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
  expect(wrapper.state('guesses')).toEqual([]);

  wrapper.instance().makeGuess('10');
  expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
  expect(wrapper.state('guesses')).toEqual([10]);

  wrapper.instance().makeGuess('30');
  expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
  expect(wrapper.state('guesses')).toEqual([10, 30]);

  wrapper.instance().makeGuess('50');
  expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
  expect(wrapper.state('guesses')).toEqual([10, 30, 50]);

  wrapper.instance().makeGuess('59');
  expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
  expect(wrapper.state('guesses')).toEqual([10, 30, 50, 59]);

  wrapper.instance().makeGuess('60');
  expect(wrapper.state('feedback')).toEqual('You got it!');
  expect(wrapper.state('guesses')).toEqual([10, 30, 50, 59, 60]);
});

it('Can generate an Aural Update', () => {
  const wrapper = shallow(<Game />);
  const guesses = [1, 30, 99];
  const feedback = 'Test Aural Update';
  wrapper.setState({guesses, feedback});

  wrapper.instance().generateAuralUpdate();
  expect(wrapper.state('auralStatus')).toEqual(
    `Here's the status of the game right now: ${feedback} You've made ${guesses.length} guesses.` +
    ` In order of most- to least-recent, they are: ${guesses.join(', ')}`
  )
});