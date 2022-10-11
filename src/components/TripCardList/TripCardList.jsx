import React from 'react';
import styled from 'styled-components';
import { TripCard } from '../TripCard/TripCard';

const TripCardListTitle = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
  font-variation-settings: 'wght' 700;
`;

const TripCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const TripCardList = () => {
  const trips = [
    {
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
      company: 'Ryanair',
    },
    {
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
      company: 'Air Mauritius',
    },
    {
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
  ];

  return (
    <>
      <TripCardListTitle>All the Trips</TripCardListTitle>
      <TripCardWrapper>
        {trips.map((trip, i) => {
          return <TripCard key={i} trip={trip} />;
        })}
      </TripCardWrapper>
    </>
  );
};
