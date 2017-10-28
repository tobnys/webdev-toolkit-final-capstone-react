import React from 'react';
import {shallow, mount, render} from 'enzyme';

import CategorySub from '../js/components/categorysub';

describe('<CategorySub />', () => {
	it('Renders without crashing', () => {
		shallow(<CategorySub />);
	});
});
