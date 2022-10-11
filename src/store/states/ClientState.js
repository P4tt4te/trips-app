import uniqid from 'uniqid';

export const ClientState = {
  username: 'Anonymous',
  selectedTrip: null,
  trips: [
    {
      id: uniqid(),
      destination: 'Serbie',
      image: 'serbia.jpg',
      start: {
        date: 'December 16, 2022 (03:24)',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 (03:24)',
        location: 'Somewhere',
      },
      price: 100,
      seats: 70,
      company: 'Ryanair',
    },
    {
        id: uniqid(),
        destination: 'Serbie',
        image: 'serbia.jpg',
        start: {
          date: 'December 16, 2022 (03:24)',
          location: 'Paris',
        },
        end: {
          date: 'December 17, 2022 (03:24)',
          location: 'Somewhere',
        },
        price: 100,
        seats: 70,
        company: 'Ryanair',
      }
  ],
};
