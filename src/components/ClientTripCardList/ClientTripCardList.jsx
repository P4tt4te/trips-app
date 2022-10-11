import React from 'react';
import styled from 'styled-components';
import { ClientTripCard } from '../ClientTripCard/ClientTripCard';

const ClientTripCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const ClientTripCardList = ({ trips, dispatch }) => {
  return (
    <>
      {trips.length > 0 ? (
        <ClientTripCardWrapper>
          {trips.map((trip, i) => {
            return (
              <ClientTripCard key={trip.id} trip={trip} dispatch={dispatch} />
            );
          })}
        </ClientTripCardWrapper>
      ) : (
        <p>You have no planned trip. Let's book one!</p>
      )}
    </>
  );
};
