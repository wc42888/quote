import React from 'react';
import { mount } from 'enzyme';
import Field from './Field';

describe('test Field component', () => {
  let field;
  const label = 'label';

  it('should render the correct label and the asterisk for required field', () => {
    field = mount(<Field label={label} required />);
    const labelEl = field.find('label');
    expect(labelEl.text()).toBe(`label*`);
  });

  it('should only render the correct label when it is not required field', () => {
    field = mount(<Field label={label} />);
    const labelEl = field.find('label');
    expect(labelEl.text()).toBe(label);
  });
});
