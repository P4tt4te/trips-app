import React from 'react';
import styled from 'styled-components';

import { TripCard } from '../TripCard/TripCard';

export const TripCardList = () => {
  const TripCardListTitle = styled.h1`
    font-size: 2em;
    font-weight: bold;
  `;

  const trips = [
    {
      country: 'Serbie',
      start: {
        date: 'December 16, 2022 03:24:00',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 03:24:00',
        location: 'Somewhere',
      },
      price: 100,
      seats: 70,
      company: 'Ryanair',
    },
    {
      country: 'Hongrie',
      start: {
        date: 'December 16, 2022 03:24:00',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 03:24:00',
        location: 'Somewhere',
      },
      price: 150,
      seats: 70,
      company: 'Ryanair',
    },
    {
      country: 'Estonie',
      start: {
        date: 'December 16, 2022 03:24:00',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 03:24:00',
        location: 'Somewhere',
      },
      price: 200,
      seats: 70,
      company: 'Ryanair',
    },
    {
      country: 'Bosnie',
      start: {
        date: 'December 16, 2022 03:24:00',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 03:24:00',
        location: 'Somewhere',
      },
      price: 70,
      seats: 70,
      company: 'Ryanair',
    },
    {
      country: 'Île Maurice',
      start: {
        date: 'December 16, 2022 03:24:00',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 03:24:00',
        location: 'Somewhere',
      },
      price: 130,
      seats: 70,
      company: 'Air Mauritius',
    },
    {
      country: 'France',
      start: {
        date: 'December 16, 2022 03:24:00',
        location: 'Paris',
      },
      end: {
        date: 'December 17, 2022 03:24:00',
        location: 'Somewhere',
      },
      price: 40,
      seats: 70,
      company: 'Air France',
    },
  ];

  return (
    <>
      <TripCardListTitle>All the Trips</TripCardListTitle>
      {trips.map((trip, i) => {
        return <TripCard key={i} trip={trip} />;
      })}
    </>
  );
};
