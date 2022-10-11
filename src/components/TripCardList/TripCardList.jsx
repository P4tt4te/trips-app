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

export const TripCardList = ({ trips, addSelectTrip }) => {
  return (
    <>
      <TripCardListTitle>All the Trips</TripCardListTitle>
      <TripCardWrapper>
        {trips.map((trip, i) => {
          return (
            <TripCard
              key={i}
              trip={trip}
              onClick={() =>
                addSelectTrip({ type: 'add_selectedTrip', trip: trip })
              }
            />
          );
        })}
      </TripCardWrapper>
    </>
  );
};
