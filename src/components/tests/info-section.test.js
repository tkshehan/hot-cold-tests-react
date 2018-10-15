import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from '../info-section'

it('Renders without crashing', () => {
  shallow(<InfoSection />);
});