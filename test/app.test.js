import React from 'react';
import {shallow, mount, render} from 'enzyme';

import App from '../js/components/app';

describe('<App />', () => {
	it('Renders without crashing', () => {
		shallow(<App />);
	});
});
