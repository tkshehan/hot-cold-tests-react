import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from '../feedback'

it('Renders without crashing', () => {
  shallow(<Feedback />);
});

it('Displays Feedback', () => {
  let testFeedback = 'Test Feedback';
  let wrapper = shallow(<Feedback feedback={testFeedback} />);
  expect(wrapper.contains(testFeedback)).toEqual(true);
})