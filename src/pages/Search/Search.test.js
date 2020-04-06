import React from 'react';
import { shallow } from "enzyme";
import { MockedProvider } from '@apollo/react-testing';

import { Search } from './Search';

import queries from '../../graphql/queries';

const mocks = [
  {
    request: {
      query: queries.GET_BOATS,
      variables: {
        active: true,
      },
    },
    result: {
      data: {
        getBoats: [
          {
            id: 1,
            name: "Salvatore",
            type: "Speed boat",
            year: 2015,
            reviews: {
              total: 15,
              score: 5
            },
            marina: "Buff Marina",
            locality: "California",
            country: "United States",
            skipper: false,
            active: true,
            cabins: 5,
            guests: 10,
            length: 100,
            price: 5000,
            imageUrl: ""
          }
        ]
      }
    },
  },
];

describe("Page - Search", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Search />
      </MockedProvider>);
  });
  it('should render the Search Page correctly', () => {   
    expect(component).toMatchSnapshot();
  });
});