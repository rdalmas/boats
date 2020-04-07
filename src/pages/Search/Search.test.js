import React from 'react';
import { shallow } from "enzyme";
import { MockedProvider } from '@apollo/react-testing';

import { Search } from './Search';

import { mockGetBoats } from '../../testUtils/fixtures/queries';

describe("Page - Search", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <MockedProvider mocks={mockGetBoats} addTypename={false}>
        <Search />
      </MockedProvider>);
  });
  it('should render the Search Page correctly', () => {   
    expect(component).toMatchSnapshot();
  });
});