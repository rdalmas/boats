import React from 'react';
import { shallow } from "enzyme";

import { Home } from './Home';

describe("Page - Home", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Home />);
  });
  it('should render the Home Page correctly', () => {   
    expect(component).toMatchSnapshot();
  });
});

