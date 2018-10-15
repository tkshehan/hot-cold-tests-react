import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from '../feedback'

it('Renders without crashing', () => {
  shallow(<Feedback />);
});