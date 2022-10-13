import React from 'react';
import styled from 'styled-components';
import { TripCard } from '../TripCard/TripCard';

const TripCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 3.2rem;
`;

const TripCardEmpty = styled.p`
  color: ${(props) => props.theme.colors.grey};
  margin-top: 1.6rem;
`;

export const TripCardList = ({ query, trips, addSelectTrip }) => {
  return (
    <>
      {/* {query !== "" ? ( */}
      <TripCardWrapper>
        {trips
          .filter((trip) => {
            if (query === '') {
              return trip;
            } else if (
              trip.destination
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase())
            ) {
              return trip;
            }
          })
          .map((trip, i) => {
            if (trip.seats > 0) {
              return (
                <TripCard
                  key={i}
                  trip={trip}
                  onClick={() =>
                    addSelectTrip({ type: 'add_selectedTrip', trip: trip })
                  }
                />
              );
            } else {
              return null;
            }
          })}
      </TripCardWrapper>
      {/* ) : (
        <TripCardEmpty>No trip fits your query. Try another one!</TripCardEmpty>
      )} */}
    </>
  );
};
