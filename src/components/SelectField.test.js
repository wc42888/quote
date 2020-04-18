import React from 'react';
import { mount } from 'enzyme';
import SelectField from './SelectField';

describe('test SelectField component', () => {
  let selectField;
  const options = [
    { value: 1, option: 1 },
    { value: 2, option: 2 },
    { value: 3, option: 3 },
  ];

  selectField = mount(<SelectField options={options} />);

  it('should render correct number of options', () => {
    const optionsLength = selectField.find('option').length;
    expect(optionsLength).toBe(options.length);
  });
});
