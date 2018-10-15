import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from '../game';

it('Renders without crashing', () => {
  shallow(<Game />);
});