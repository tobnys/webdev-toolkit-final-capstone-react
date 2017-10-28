import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Generation from '../js/components/generation';

describe('<Generation />', () => {
	it('Renders without crashing', () => {
		shallow(<Generation />);
	});
});
