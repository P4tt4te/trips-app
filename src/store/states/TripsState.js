import uniqid from 'uniqid';

export const TripsState = {
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
      destination: 'Hongrie',
      image: 'hongria.jpg',
      start: {
        date: 'December 16, 2022 (03:24)',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 (03:24)',
        location: 'Somewhere',
      },
      price: 150,
      seats: 70,
      company: 'Ryanair',
    },
    {
      id: uniqid(),
      destination: 'Estonie',
      image: 'estonia.jpg',
      start: {
        date: 'December 16, 2022 (03:24)',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 (03:24)',
        location: 'Somewhere',
      },
      price: 200,
      seats: 70,
      company: 'British Airways',
    },
    {
      id: uniqid(),
      destination: 'Bosnie',
      image: 'bosnia.jpg',
      start: {
        date: 'December 16, 2022 (03:24)',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 (03:24)',
        location: 'Somewhere',
      },
      price: 70,
      seats: 70,
      company: 'Ryanair',
    },
    {
      id: uniqid(),
      destination: 'Île Maurice',
      image: 'mauritius.jpg',
      start: {
        date: 'December 16, 2022 (03:24)',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 (03:24)',
        location: 'Somewhere',
      },
      price: 130,
      seats: 70,
      company: 'American Airlines',
    },
    {
      id: uniqid(),
      destination: 'France',
      image: 'france.jpg',
      start: {
        date: 'December 16, 2022 (03:24)',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 03:24',
        location: 'Somewhere',
      },
      price: 40,
      seats: 70,
      company: 'Air France',
    },
  ],
};
