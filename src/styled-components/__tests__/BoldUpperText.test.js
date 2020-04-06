import React from 'react';
import { shallow } from "enzyme";

import BoldUpperText from '../BoldUpperText';

describe("Styled Components - BoldUpperText", () => {
  let component;
  beforeEach(() => {
    component = shallow(<BoldUpperText text="text" />);
  });
  it('should render the BoldUpperText correctly', () => {   
    expect(component).toMatchSnapshot();
  });
});