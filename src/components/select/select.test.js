import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from './Select';

Enzyme.configure({ adapter: new Adapter() });

test('should set value on change event', () => {
    const simpleSelect = shallow(<Select />);
    const selectedValue = new Date();
    const event = { target: { value } };
  
    simpleSelect.simulate('change', event);
    expect(simpleSelect.prop('value')).toBe(selectedValue);
  });