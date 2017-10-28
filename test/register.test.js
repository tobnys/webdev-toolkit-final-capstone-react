import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Register from '../js/components/register';

import store from "../js/store";

describe('<Register />', () => {
	it('Renders without crashing', () => {
		shallow(<Register store={store}/>).dive();
	});
});
