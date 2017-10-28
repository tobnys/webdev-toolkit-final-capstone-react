import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Category from '../js/components/category';

describe('<Category />', () => {
	it('Renders without crashing', () => {
		shallow(<Category />);
	});
});
