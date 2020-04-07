import queries from '../../graphql/queries';

export const mockGetBoats = [
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