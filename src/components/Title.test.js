import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('test Title component', () => {
  let title;
  const titleInput = 'title';

  beforeEach(() => {
    title = shallow(<Title title={titleInput} />);
  });

  it('should render the correct title', () => {
    const titleText = title.text();
    expect(titleText).toBe(titleInput);
  });
});
