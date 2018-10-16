import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from '../top-nav'

it('Renders without crashing', () => {
  shallow(<TopNav />);
});

it('Should fire onRestartGame when "New Game" is clicked', () => {
  const callback = jest.fn();
  const wrapper = shallow(<TopNav onRestartGame={callback} />)
  wrapper.find('.new').simulate('click');
  expect(callback).toHaveBeenCalled();
});

it('Should fire onGenerateAuralUpdate when "Hear state of game" is clicked', () => {
  const callback = jest.fn();
  const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
  wrapper.find('.status-link').simulate('click');
  expect(callback).toHaveBeenCalled();
});

