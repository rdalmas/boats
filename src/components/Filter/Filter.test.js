import React from 'react';
import { shallow } from "enzyme";

import { Filter } from './Filter';
import SearchProvider from "../../pages/Search/search.provider"
import { mockBoats } from "../../testUtils/fixtures/data";

describe("Components - Filter", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <SearchProvider>
        <Filter boats={mockBoats} />
      </SearchProvider>
    );
  });
  it('should render the Filter correctly', () => {   
    expect(component).toMatchSnapshot();
  });
});