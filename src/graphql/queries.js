import { gql } from 'apollo-boost';

const GET_BOATS = gql`
  query getBoats($input: GetBoatInput) {
    getBoats(input: $input) {
      id
      name
      type
      year
      reviews {
        total
        score
      }
      marina
      locality
      country
      skipper
      active
      cabins
      guests
      length
      price
      imageUrl
    }
  }
`;


const queries = {
  "GET_BOATS": GET_BOATS
}

export default queries;