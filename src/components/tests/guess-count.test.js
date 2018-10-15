import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from '../guess-count'

it('Renders without crashing', () => {
  shallow(<GuessCount />);
});