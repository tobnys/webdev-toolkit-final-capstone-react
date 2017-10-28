import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Landing from '../js/components/landing';

describe('<Landing />', () => {
	it('Renders without crashing', () => {
		shallow(<Landing />);
	});
});
