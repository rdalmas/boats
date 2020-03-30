import { gql } from 'apollo-boost';

const GET_BOATS = gql`
  query getBoats($input: GetBoatInput) {
    getBoats(input: $input) {
      id
      name
      type
    }
  }
`;

const queries = {
  "GET_BOATS": GET_BOATS
}

export default queries;