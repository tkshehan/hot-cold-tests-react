import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from '../aural-status';

it('Renders without crashing', () => {
  shallow(<AuralStatus />);
});

it('Should display a status', () => {
  let testStatus = 'Test Status'
  const wrapper = shallow(<AuralStatus auralStatus={testStatus} />)
  expect(wrapper.contains(testStatus)).toEqual(true);
});