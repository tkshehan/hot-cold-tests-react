import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from '../guess-form'

it('Renders without crashing', () => {
  shallow(<GuessForm />);
});

it('Should call onSubmit when submitted', () => {
  const callback = jest.fn();
  const wrapper = mount(<GuessForm onSubmit={callback} />);
  wrapper.simulate('submit');
  expect(callback).toHaveBeenCalled;
});