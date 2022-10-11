import React from 'react';
import styled from 'styled-components';
import { Button } from './../Button/Button';

const TripCardTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-variation-settings: 'wght' 700;
`;

const TripCardContainer = styled.div`
  grid-column: auto / span 1;
  display: flex;
  align-items: flex-end;
  height: 48rem;
  border-radius: 3.2rem;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  background-size: cover;
`;

const TripCardMeta = styled.div`
  font-size: 1.6rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.white};
`;

const TripCardDate = styled.span`
  display: block;
`;

const TripCardPrice = styled.span`
  display: block;
`;

const TripCardSeats = styled.span`
  display: block;
`;

export const TripCard = ({ trip }) => {
  return (
    <TripCardContainer
      style={{
        backgroundImage: `url(img/destinations/${trip.image})`,
      }}
    >
      <TripCardMeta>
        <TripCardTitle>{trip.destination}</TripCardTitle>
        <TripCardDate>
          {trip.start.date}, {trip.start.location}
        </TripCardDate>
        <TripCardDate>
          {trip.end.date}, {trip.end.location}
        </TripCardDate>
        <TripCardPrice>{trip.price}€</TripCardPrice>
        <TripCardSeats>{trip.seats} seats left</TripCardSeats>
        <Button name="Select" />
      </TripCardMeta>
    </TripCardContainer>
  );
};
