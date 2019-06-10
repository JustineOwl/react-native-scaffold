import { shallow } from 'enzyme';
import React from 'react';
import { TestComponent } from '../TestComponent';

it('renders correctly', () => {
    const component = shallow(<TestComponent />);

    expect(component).toMatchSnapshot();
});
