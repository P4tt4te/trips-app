import React from 'react';
import styled from 'styled-components';
import { ClientTripCard } from '../ClientTripCard/ClientTripCard';

const ClientTripCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 3.2rem;
`;

const ClientTripCardEmpty = styled.p`
  color: ${(props) => props.theme.colors.grey};
  margin-top: 1.6rem;
`;

export const ClientTripCardList = ({ trips, dispatch, changeSeats }) => {
  return (
    <>
      {trips.length > 0 ? (
        <ClientTripCardWrapper>
          {trips.map((trip, i) => {
            return (
              <ClientTripCard key={trip.trip.id} trip={trip.trip} seats={trip.seats} dispatch={dispatch} changeSeats={changeSeats} />
            );
          })}
        </ClientTripCardWrapper>
      ) : (
        <ClientTripCardEmpty>
          You have no planned trip. Let's book one!
        </ClientTripCardEmpty>
      )}
    </>
  );
};
