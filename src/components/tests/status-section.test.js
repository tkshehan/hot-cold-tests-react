import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from '../status-section'

it('Renders without crashing', () => {
  shallow(<StatusSection guesses={[]} />);
});