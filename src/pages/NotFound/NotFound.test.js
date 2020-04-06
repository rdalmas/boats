import React from 'react';
import { shallow } from "enzyme";

import { NotFound } from './NotFound';

describe("Page - Not Found", () => {
  let component;
  beforeEach(() => {
    component = shallow(<NotFound />);
  });
  it('should render the Not Found Page correctly', () => {   
    expect(component).toMatchSnapshot();
  });
});